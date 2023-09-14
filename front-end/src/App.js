import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BraceletsIndex from "./Pages/Bracelets/Index";
import EarringsIndex from "./Pages/Earrings/Index";
import NecklaceIndex from "./Pages/Necklaces/Index";
import RingsIndex from "./Pages/Rings/Index";
import WatchesIndex from "./Pages/Watches/Index";
import RingsDetails from "../src/components/Rings/RingsDetails";
import WatchesDetails from "../src/components/Watches/WatchesDetails";
import NecklaceDetails from "../src/components/Necklaces/NecklaceDetails";
import EarringDetails from "../src/components/Earrings/EarringDetails";
import BraceletsDetails from "../src/components/Bracelets/BraceletDetails";
import Four0Four from "./Pages/Four0Four/Four0Four";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    // Load cart data from sessionStorage when the component mounts
    const cartFromSession = sessionStorage.getItem("cart");
    if (cartFromSession) {
      setCartItems(JSON.parse(cartFromSession));
    }
  }, []);

  useEffect(() => {
    // Save cart data to sessionStorage whenever it changes
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bracelets/:id"
            element={<BraceletsDetails addToCart={addToCart} />}
          />
          <Route path="/necklaces" element={<NecklaceIndex />} />
          <Route
            path="/rings/:id"
            element={<RingsDetails addToCart={addToCart} />}
          />
          <Route
            path="/watches/:id"
            element={<WatchesDetails addToCart={addToCart} />}
          />
          <Route
            path="/necklaces/:id"
            element={<NecklaceDetails addToCart={addToCart} />}
          />
          <Route
            path="/earrings/:id"
            element={<EarringDetails addToCart={addToCart} />}
          />
          <Route path="/rings" element={<RingsIndex />} />
          <Route path="/bracelets" element={<BraceletsIndex />} />
          <Route path="/earrings" element={<EarringsIndex />} />
          <Route path="/watches" element={<WatchesIndex />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} clearCart={clearCart} />}
          />
          <Route path="*" element={<Four0Four />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
