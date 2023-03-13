import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/earrings">Earrings</Link>
        <Link to="/necklaces">Necklaces</Link>
        <Link to="/rings">Rings</Link>
        <Link to="/watches">Watches</Link>
      </nav>
    </div>
  );
}

export default NavBar;
