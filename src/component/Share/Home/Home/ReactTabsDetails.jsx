import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../../hooks/useTitle";

const ReactTabsDetail = () => {
  useTitle("Toy Details")
  const toyDetails = useLoaderData();
  const { toyName, photo, price, details, rating } = toyDetails;

  const handleBuy = () => {
    Swal.fire({
      title: "Thank you buying this product",
      text: "Your purchase is done",
      icon: "success",
      confirmButtonText: "OK!",
    });
  };
  

  return (
    <div className="md:mx-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row md:gap-10">
          <img src={photo} className="h-96 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6 text-2xl">Details: {details}</p>
            <div className="flex space-x-5 text-4xl">
              <p>Price: ${price}</p>
              <p className="flex gap-1">
                Rating:
                <Rating
                  style={{ maxWidth: 180 }}
                  value={rating}
                  readOnly
                />{" "}
              </p>
            </div>
            <button className="btn btn-primary mt-5" onClick={handleBuy}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTabsDetail;
