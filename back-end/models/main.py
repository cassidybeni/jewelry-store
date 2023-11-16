import pandas as pd #Data manipulation/CSV files
from surprise import Dataset, Reader, SVD #Recommendation models w/ collaborative filtering (SVD algorithm)
import psycopg2 #Enables cn to psql db
from datetime import datetime #Timestamps
from collections import defaultdict #Dictionary w/ default values
import os

conn_string = os.environ.get('DB_CONNECTION_STRING')

def prepare_surprise_data(data): #Takes in df
    reader = Reader(rating_scale=(0, 1)) #Create a reader w/ rating scale 0-1
    return Dataset.load_from_df(data[['session_id', 'product_id', 'rating']], reader).build_full_trainset() #Return trainset built from a dataset of the df

def train_model(full_data):
    model = SVD() #Creates an instance of the Singular Value Decomposition model (collaborative filtering algorithm used for recommendation systems)
    model.fit(full_data) #Trains SVD model using full_data (user-item interaction data)
    return model


def get_target_user_recommendations(target_session_id, full_data, model, data): #Takes in user session, dataset, trained model, user-item interaction data
    interacted_products = defaultdict(set) #Create a dictionary that tracks the items that the users interacted w/
    all_products = full_data.build_anti_testset() #Creates a set of negative interactions by building an anti-test set from the full data (interactions that have not occurred)

    for index, row in data.iterrows(): #Iterates through the rows of the df
        if row['interaction'] in ['view', 'add_to_cart']: #Checks if interaction type if view or added to the cart
            interacted_products[row['session_id']].add(row['product_id']) #Updates the interacted products list by adding the product id to the set associated w the session id

    target_user_interacted_products = interacted_products[target_session_id] #Retrieves the set of products the user interacted w/

    filtered_products_to_predict = [] #Stores models predicted recs
    for user_id, product_id, _ in all_products: #Iterates over the user id and product id in all products
        if user_id == target_session_id and product_id not in target_user_interacted_products: #Check if the user id and session id match & if the user interacted w/ it
            filtered_products_to_predict.append((user_id, product_id)) #Add the user-product to the list

    recommended_products = []
    for user_id, product_id in filtered_products_to_predict: #For each user-product pair
        predicted_rating = model.predict(user_id, product_id).est #A rating is predicted using the model.predict method
        recommended_products.append((user_id, product_id, predicted_rating)) #Adds tuple to the recommended product list

    return recommended_products[:3] #Return top 3 recs

def insert_recommendations_to_db(recommended_products, target_session_id, conn, data): #Takes in list of recommended product tuples, session, db cn obj, user-item interaction data
    cur = conn.cursor() #Initializes cursor obj to sql cmds within a psql db connected through conn
    
    for recommendation in recommended_products: #Iterates through each rec in the list
        if isinstance(recommendation, tuple) and len(recommendation) == 3: #Checks if it's a tuple and has 3 elements
            source_product_id, recommended_product_id, predicted_rating = recommendation #Unpacks tuples into variables
            source_product_name = data.loc[data['product_id'] == source_product_id, 'product_name'].iloc[0] #Retrieves the name of the src product from the df using it's id
            recommended_product_name = data.loc[data['product_id'] == recommended_product_id, 'product_name'].iloc[0] #Same thing, but w/ the rec product
            #Insert values in the table and passes actual values as a tuple as the second argument
            cur.execute( 
                "INSERT INTO recommendations (source_product_name, recommended_product_name, rating, created_at) VALUES (%s, %s, %s, %s)",
                (source_product_name, recommended_product_name, predicted_rating, datetime.now())
            )
    

    conn.commit() #Save changes
    cur.close() #Close cursor obj

def main():
    #Read data from data.csv
    data = pd.read_csv('data.csv')
    
    #Prepare surprise data and train model
    full_data = prepare_surprise_data(data)
    model = train_model(full_data)
    
    target_session_id = 1
    recommended_products = get_target_user_recommendations(target_session_id, full_data, model, data)


    #Establish cn and insert recommendations
    conn = psycopg2.connect(conn_string)
    insert_recommendations_to_db(recommended_products, target_session_id, conn, data)
    conn.close()

if __name__ == "__main__":
    main()
