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
import { LoadingProvider } from "./components/Loading/LoadingContext";
import Cart from "./Pages/Cart/Cart";
import Loading from "./components/Loading/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const removeItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCart);
  };

  useEffect(() => {
    // Simulate loading data for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  //Wrap entire app with the LoadingProvider
  return (
    <div>
      <LoadingProvider>
        {isLoading ? (
          <Loading />
        ) : (
          <>
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
                element={<Cart cartItems={cartItems} removeItem={removeItem} />}
              />
              <Route path="*" element={<Four0Four />} />
            </Routes>
          </Router>
          <ToastContainer />
          </>
        )}
      </LoadingProvider>
    </div>
  );
}

export default App;
