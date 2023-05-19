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
    <div style={{backgroundColor: "#c3af75"}}>
      <div>
        <h1 className="text-center text-5xl my-5 font-bold italic">Some of our collections</h1>
      </div>
      <div className="grid grid-cols-1 md:flex w-full px-5 md:px-0 gap-5 md:gap-0">
        {
          gallery.map((toyGallery) => <ToyCard key={toyGallery._id}toyGallery={toyGallery}></ToyCard>)
        }
      </div>
    </div>
  );
};

export default Gallery;
