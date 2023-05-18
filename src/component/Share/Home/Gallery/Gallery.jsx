import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/toyGallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl my-5 font-bold italic">Some of our collections</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:justify-around gap-5 md:gap-x-44">
        {
          gallery.map((toyGallery) => <ToyCard key={toyGallery._id}toyGallery={toyGallery}></ToyCard>)
        }
      </div>
    </div>
  );
};

export default Gallery;
