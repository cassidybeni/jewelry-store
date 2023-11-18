import React from "react";
import numeral from "numeral";
import "./Cart.css";
import Recommendations from "../../components/Recomendations/Recommendations";

function Cart({ cartItems, removeItem }) {
  let subtotal = 0;
  cartItems.forEach((item) => {
    let removeDollarSign = item.price.replace("$", "");
    let removeComma = removeDollarSign.replace(",", "");
    let price = parseFloat(removeComma);

    if (!isNaN(price)) {
      subtotal += price;
    }
  });

  let tax = subtotal * 0.08875;
  let total = subtotal + tax;

  return (
    <div className="cart">
      <div className="bag-items">
        <h2 className="shopping-cart-heading">Shopping Bag</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">{item.price}</p>
              </div>
              <button
                className="delete-item-btn"
                onClick={() => removeItem(item)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div>
          <div className="subtotal">Subtotal: ${numeral(subtotal).format("0,0.00")}</div>
          <div className="tax">Tax: ${numeral(tax).format("0,0.00")}</div>
          <hr />
          <div className="total">Total: ${numeral(total).format("0,0.00")}</div>
        </div>
      </div>
      <Recommendations />
    </div>
  );
}

export default Cart;
