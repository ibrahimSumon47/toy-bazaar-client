import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AllToysDetails = () => {
  useTitle("Toy Details")
  const allToyDetail = useLoaderData();
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
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={allToyDetail[0]?.photo}
            className="h-96 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{allToyDetail[0]?.toyName}</h1>
            <p className="py-6 text-2xl">
              <span className="font-bold">Details:</span>{" "}
              {allToyDetail[0]?.details}
            </p>
            <p className="pb-6 text-2xl">
              <span className="font-bold">Seller:</span>{" "}
              {allToyDetail[0]?.sellerName}
            </p>
            <p className="pb-6 text-2xl">
              <span className="font-bold">Seller:</span>{" "}
              {allToyDetail[0]?.email}
            </p>
            <p className="pb-6 text-2xl">
              <span className="font-bold">Avaiable Quntity</span>{" "}
              {allToyDetail[0]?.quantity}
            </p>
            <div className="flex space-x-5 text-4xl">
              <p>
                <span className="font-bold">Price:</span> $
                {allToyDetail[0]?.price}
              </p>
              <p className="">
                <span className="font-bold flex">
                  Rating:
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={allToyDetail[0]?.rating}
                    readOnly
                  />{" "}
                </span>
              </p>
              
            </div>
            <button className="btn btn-primary mt-5" onClick={handleBuy}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToysDetails;
