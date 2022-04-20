import React from "react";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

import DisplayWishList from "./etc/DisplayWishlist";

const FetchWishlistData = () =>{

    return axios
    .get("http://localhost:80/getWL.php")
      .then(response => {
        return response
      })
      .catch(function (error) {
        console.log("Error getting wishlist", error)
      })
}

const PrintWishlist = (wishlist) =>{
    if(!wishlist) return;
    return wishlist.data.map(function (object, i) {
        return <DisplayWishList obj={object} key={i} />
    })

}

export default function WishList() {

    const [wishlist, setWishlist] = useState('');

    useEffect(() =>{
        //fetching wishlist data

        FetchWishlistData().then((data) =>{
            console.log("Data", data);
            setWishlist(data);
        })
    }, []);

    console.log(wishlist);  

    return (
        <>
        <div className="py-12">
            <div className="md:flex ">
                <div className="w-full p-4 px-5 py-5">
                    <div className="md:grid md:grid-cols-2 gap-2 ">
                        <div className="col-span-2 p-5">
                            <h1 className="text-xl font-medium ">{wishlist ? wishlist.data[0].NameOfWishList : ""}</h1>
                                {PrintWishlist(wishlist)}                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}