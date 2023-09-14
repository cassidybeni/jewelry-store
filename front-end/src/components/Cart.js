import React from "react";
import "./Cart.css";

function Cart({ cartItems, clearCart }) {
  let subtotal = 0;
  for (const item of cartItems) {
    let removeDollarSign = item.price.replace("$", "");
    let removeComma = removeDollarSign.replace(",", "");
    let price = parseFloat(removeComma);

    subtotal += parseFloat(price);
  }

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
            </li>
          ))}
        </ul>
        <button className="empty-bag-btn" onClick={clearCart}>
          Empty Bag
        </button>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div>
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <div>Tax: ${tax.toFixed(2)}</div>
          <hr></hr>
          <div>Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
