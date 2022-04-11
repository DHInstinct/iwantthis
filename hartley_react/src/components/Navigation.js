import {
  Link, useNavigate
} from "react-router-dom";
import Home from "./Home";

import React, { Component, useState, useEffect } from 'react';
import axios from "axios";

export default function Navbar({ name, SetName }) {

  let navigate = useNavigate();

  useEffect(() => {
    //set the name when the component reloads.
    SetName(localStorage.getItem("userName"));
  });

  function Logout(e) {
    e.preventDefault();
    //clear state and localstorage
    SetName("");
    localStorage.clear();
    //navigate to home
    navigate("/");
  }


  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <img className='object-contain h-10 w-10' src='./public/logo192.png' alt="img"></img> */}
        <span className="font-semibold text-2xl tracking-tight pl-5">I WANT THIS</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow">
          <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">Home</Link>
          <Link to={"/productlist"} className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">Product List</Link>
          <Link to={"/carousel"} className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">Individual</Link>
          <Link to={"/wishlist"} className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">Wishlist</Link>
          <Link to={"/admin"} className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">Admin</Link>
          {/* <Link path="/">Home</Link>
          <Link path="/productlist" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4" >Product List</Link>
          <Link path="/Carousel" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4" >Carousel</Link> */}
        </div>
        <div className="p-4">
          <h4 className="font-medium text-lg text-white">
            {name ?
              <p>
                Hello, {name}
              </p>
              : ""}
          </h4>
        </div>
        {name ? <button onClick={(e) => Logout(e)} href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</button>
          : ""}
      </div>
    </nav>

  )
}

