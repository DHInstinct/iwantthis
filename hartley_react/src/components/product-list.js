import axios from "axios";
import { useEffect, useState } from "react";
import SingleProd from "./etc/DisplaySingleProd";

export default function ProductList() {

    const [products, setProducts] = useState([]);


    function HandleProducts() {
        axios.get("http://localhost:80/getproducts.php")
            .then(response => {
                setProducts(products => (response.data));
            })
            .catch(function (error) {
                console.log("Error getting products", error)
            })
    }


    function DisplayProductList() {
        return products.map(function (object, i) {
            return <SingleProd obj={object} key={i} />
        })

    }

    function clearFilters() {
        let elementCount = document.getElementsByClassName('category1');

        for (var i = 0; i < elementCount.length; i++) {
            document.getElementsByClassName('category1')[i].style.visibility = 'visible';
            document.getElementsByClassName('category2')[i].style.visibility = 'visible';
            document.getElementsByClassName('category3')[i].style.visibility = 'visible';
        }
    }

    let toggle1 = true;
    function FilteriPhones() {

        let elementCount = document.getElementsByClassName('category1');
        if (toggle1) {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category2')[i].style.visibility = 'hidden';
                document.getElementsByClassName('category3')[i].style.visibility = 'hidden';
            }
        }
        else {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category2')[i].style.visibility = 'visible';
                document.getElementsByClassName('category3')[i].style.visibility = 'visible';
            }
        }

        toggle1 = !toggle1

    }

    let toggle2 = true;
    function FilteriPads() {
        let elementCount = document.getElementsByClassName('category2');
        if (toggle2) {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category1')[i].style.visibility = 'hidden';
                document.getElementsByClassName('category3')[i].style.visibility = 'hidden';

            }
        }
        else {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category1')[i].style.visibility = 'visible';
                document.getElementsByClassName('category3')[i].style.visibility = 'visible';
            }
        }

        toggle2 = !toggle2
    }


    let toggle3 = true;
    function FilterMacBooks() {
        let elementCount = document.getElementsByClassName('category1');
        if (toggle3) {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category1')[i].style.visibility = 'hidden';
                document.getElementsByClassName('category2')[i].style.visibility = 'hidden';
            }
        }
        else {
            for (var i = 0; i < elementCount.length; i++) {
                document.getElementsByClassName('category1')[i].style.visibility = 'visible';
                document.getElementsByClassName('category2')[i].style.visibility = 'visible';
            }
        }

        toggle3 = !toggle3
    }

    useEffect(() => {
        HandleProducts();
        // console.log(products)
    }, [])

    return (
        <>
            {/* {HandleProducts()} */}
            <div className="bg-white">

                <div className="container mx-auto py-16 px-4 lg:max-w-7xl lg:px-8 flex">
                    {/* <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
                    {/* <div className="container mx-auto py-16 px-4"> */}
                    {/* <h2 className="">Products</h2> */}
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {DisplayProductList()}
                    </div>
                    <div className="flex flex-col p-10 px-10">
                        <div className="p-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-10 rounded" onClick={() => clearFilters()}>Clear Filters</button>
                        </div>
                        <div className="p-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-10 rounded" onClick={() => FilteriPhones()}>Filter iPhones</button>
                        </div>
                        <div className="p-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-10 rounded" onClick={() => FilteriPads()}>Filter iPads</button>
                        </div>
                        <div className="p-4">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-10 rounded" onClick={() => FilterMacBooks()}>Filter MacBooks</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
