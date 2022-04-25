import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useResolvedPath, useNavigate } from "react-router-dom";
import Reviews from "./etc/DisplayReview";

import Modal from "./etc/Modal";

export default function SingleProd(props) {

  let { id } = useParams();

  const [product, setProduct] = useState([]);

  function HandleSingleProduct() {
    axios.get("http://localhost:80/singleprod.php?id=" + id)
      .then(response => {
        setProduct(product => (response.data));
      })
      .catch(function (error) {
        console.log("Error getting products", error)
      })

  }


  const SubmitProduct = (e) => {
    e.preventDefault();

    const SubmitObj = {
      'productid': id,
      'userid': localStorage.getItem("userid"),
      'wishlistid': localStorage.getItem("wishlistid")
    }

    // console.log(SubmitObj);

    axios.post("http://localhost:80/sendwishlistdata.php", SubmitObj)
      .then((response) => {

      })
      .catch(function (error) {
        console.log("error submitting product to wishlist")
      })
  }


  useEffect(() => {
    HandleSingleProduct();
  }, [product.id]);
  //checking if the id of that object is different, if it is re render. 

  const DisplayReviews = () => {
    const review = [];
    for (var i = 0; i < product.review; i++) {
      review.push(<Reviews key={i} />);
    }
    return review;
  }

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block mx-auto">
              <img src={"../images/" + product.image + ".jpg"} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover"></img>
            </div>
          </div>

          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>

              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {DisplayReviews()}
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">Reviews</a>
                </div>
              </div>
              <form className="mt-10">
                <div className="mt-10">

                </div>
                <button onClick={(e) => { SubmitProduct(e) }} type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Add to Wish
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.des}</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </>
  );

}