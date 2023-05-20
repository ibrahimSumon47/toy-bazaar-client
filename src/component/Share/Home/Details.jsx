import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const toyDetails = useLoaderData();
  const { toyName, photo, price, details, rating } = toyDetails;
  return (
    <div className="md:mx-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={photo} className="h-96 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6 text-2xl">Details: {details}</p>
            <div className="flex space-x-5 text-4xl">
              <p>Price: {price}</p>
              <p>Rating: {rating}</p>
            </div>
            <button className="btn btn-primary mt-5">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
