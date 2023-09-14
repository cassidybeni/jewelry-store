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
      <h2>Shopping Bag</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <div>
        <div>Subtotal: ${subtotal.toFixed(2)}</div>
        <div>Tax: ${tax.toFixed(2)}</div>
        <div>Total: ${total.toFixed(2)}</div>
      </div>
      <button className="empty-bag-btn" onClick={clearCart}>Empty Bag</button>
    </div>
  );
}

export default Cart;
