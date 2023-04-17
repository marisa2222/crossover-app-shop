import React from "react";
import { CartProvider } from "./context/cartContext";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { Link, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="user/login" element={<LoginPage />} />
          <Route path="user/signUp" element={<SignupPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
