import axios from "axios";
import { useEffect, useState } from "react";
import SingleProd from "../components/index";



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

    useEffect(() => {
        HandleProducts();
        // console.log(products)
    }, [])

    return (
        <>
            {/* {HandleProducts()} */}
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* <h2 className="">Products</h2> */}
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {DisplayProductList()}
                    </div>
                </div>
            </div>
        </>
    );
}
