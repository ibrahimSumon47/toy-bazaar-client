import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const {_id, img, toyName, details} = gallery;

  useEffect(() => {
    fetch("http://localhost:5000/toyGallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center">Some of our collections</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3">
        {
          gallery.map((toyGallery) => <ToyCard key={toyGallery._id}toyGallery={toyGallery}></ToyCard>)
        }
      </div>
    </div>
  );
};

export default Gallery;
