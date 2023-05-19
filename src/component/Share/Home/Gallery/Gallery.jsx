import React, { useEffect, useState } from "react";

const Gallery = () => {

  return (
    <div style={{backgroundColor: "#c3af75"}}>
      <div>
        <h1 className="text-center text-5xl my-5 font-bold italic">Some of our collections</h1>
      </div>
      <div className="grid grid-cols-1 md:flex mx-4 md:mx-0 md:px-0 gap-5 md:gap-0 w-96 md:w-full md:h-96">
       <img src="https://i.ibb.co/SK53v7L/eb71d288-e849-41ad-95ab-cbd8f90bb78e.jpg" alt="" />
       <img src="https://i.ibb.co/VDjbrQF/81d-V-mwk-Ow-L-AC-UL600-SR600-600.jpg" alt="" />
       <img src="https://i.ibb.co/3sc97v9/teenage-mutant-ninja-turtle-figure.webp" alt="" />
       <img src="https://i.ibb.co/x808ZXm/pmdcij-04-cropped.jpg" alt="" />
       <img className="w-96" src="https://i.ibb.co/88P1sxJ/download.jpg" alt="" />
       <img className="w-96" src="https://i.ibb.co/Mc6Szc9/images-2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
