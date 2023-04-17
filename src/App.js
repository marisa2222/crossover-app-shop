import React from "react";
import { CartProvider } from "./context/cartContext";

import Home from "./pages/Home";

import Checkout from "./pages/Checkout";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
