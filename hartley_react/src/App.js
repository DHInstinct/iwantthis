import React, { Component, useState } from 'react';

import Carousel from "./components/single-product";
import Home from './components/Home';
import Navbar from "./components/Navigation";
import ProductList from './components/product-list';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import WishList from './components/Wishlist';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"

function App() {

  const [name, SetName] = useState("");

  return (
    <>
      <div className="App">
        <Navbar SetName={SetName} name={name} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/carousel' element={<Carousel />} />
          <Route path='/login' element={<Login SetName={SetName} />} />
          <Route path='/signup' element={<Signup SetName={SetName} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />

      </div>
    </>
  );
}

export default App;
