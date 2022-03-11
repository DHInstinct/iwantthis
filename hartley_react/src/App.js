import React, { Component } from 'react';


import Carousel from "./components/single-product";
import Home from './components/Home';
import Navbar from "./components/Navigation";
import ProductList from './components/product-list';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"

function App() {
  return (
    <>
      <div className="App">

        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productlist' element={<ProductList />} />
            <Route path='/Carousel' element={<Carousel />} />
          </Routes>
        </Router>

        <br />
        <br />
        <br />
        <br />
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
