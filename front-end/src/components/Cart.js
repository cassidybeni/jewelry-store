import React from "react";
import numeral from "numeral";
import "./Cart.css";

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
            <li key={index}>
              <img src={item.image} alt={item.name}></img>
              <p>{item.name}</p>
              <p>{item.price}</p>
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
          <div>Subtotal: ${numeral(subtotal).format("0,0.00")}</div>
          <div>Tax: ${numeral(tax).format("0,0.00")}</div>
          <hr></hr>
          <div>Total: ${numeral(total).format("0,0.00")}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
