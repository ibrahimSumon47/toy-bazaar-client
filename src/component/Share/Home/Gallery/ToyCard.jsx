import React from "react";

const ToyCard = ({ toyGallery }) => {
  const { _id, img, toyName, details } = toyGallery;
  return (
    <div>
      <div className="">
        <figure>
          <img className="w-96 h-96" src={img} alt="Gallery" />
        </figure>
      </div>
    </div>
  );
};

export default ToyCard;