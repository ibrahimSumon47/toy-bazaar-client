import React from "react";

const ToyCard = ({ toyGallery }) => {
  const { _id, img, toyName, details } = toyGallery;
  return (
    <div>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-full"
            src={img}
            alt="Gallery"
          />
        </figure>
        <div className="card-body bg-orange-400 rounded-b-lg text-white">
          <h2 className="card-title">{toyName}</h2>
          <p className="">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
