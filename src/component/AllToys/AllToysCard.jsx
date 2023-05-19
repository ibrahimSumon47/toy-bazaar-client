import React from "react";

const AllToysCard = ({ toy }) => {
  const { _id, seller, photo, toyName, subCategory, availableQuantity, price, details} = toy;
  return (
    <div>
      <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-80 w-full"
            src={photo}
            alt="Figures"
          />
        </figure>
        <div className="card-body rounded-b-lg" style={{backgroundColor: "#2c4048", color: "#babda1"}}>
          <h2 className="card-title">{toyName}</h2>
          <p>Seller: {seller}</p>
          <p>Sub Category: {subCategory}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <input className="btn btn-primary" type="submit" value="View Details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToysCard;
