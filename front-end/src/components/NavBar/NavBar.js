import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-container">
      <h1 className="main-header">HELL'S KITCHEN ICE</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/necklaces">Necklaces</Link>
        <Link to="/rings">Rings</Link>
        <Link to="/watches">Watches</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
}

export default NavBar;
