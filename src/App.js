import React from 'react';
import { CartProvider } from './context/cartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" 
        element={     
        <CartProvider>
          <Header />
          <Home />
          <Footer />
          <Cart />
        </CartProvider>
      }/> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </>
  );
}

export default App;
