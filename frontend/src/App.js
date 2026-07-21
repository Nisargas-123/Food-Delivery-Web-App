import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import Splash from "./Splash";
import Profile from "./Profile";
import Restaurants from "./Restaurants";
import Menu from "./Menu";
import Checkout from "./Checkout";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider> {/* ✅ FIXED */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurants/:category" element={<Restaurants />} />
          <Route path="/menu/:category/:name" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ NEW */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
