
import './App.css';
import Login from './components/login/login';
import React from "react";
import Dashboard from './components/dashboard/dashboard.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./components/wishlist/wishlist";
import Cart from "./components/cart/cart";
import Signup from  "./components/signup/signup"
import Product from "./components/product/product"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/wishlist" element={<Wishlist />} />
          
          <Route path="/cart" element={<Cart />} />

         <Route path="/" element={<Signup />} />  

         <Route path="/product" element={<Product />} /> 

        <Route path="/product/:id" element={<Product />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
