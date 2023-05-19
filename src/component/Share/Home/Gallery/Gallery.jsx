import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    responsive: [
      {
        breakpoint: 768, // Screen width at which the settings should change
        settings: {
          slidesToShow: 1, // Number of slides to show at once on small devices
          slidesToScroll: 1, // Number of slides to scroll when navigating on small devices
        },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#c3af75" }}>
      <div>
        <h1 className="text-center text-5xl my-5 font-bold italic">
          Some of our collections
        </h1>
      </div>
      <Slider {...settings} className="">
        <img
          className="h-[500px] object-cover"
          src="https://i.ibb.co/SK53v7L/eb71d288-e849-41ad-95ab-cbd8f90bb78e.jpg"
          alt=""
        />
        <img
          className="h-[500px] object-cover"
          src="https://i.ibb.co/VDjbrQF/81d-V-mwk-Ow-L-AC-UL600-SR600-600.jpg"
          alt=""
        />
        <img
          className="h-[500px] object-cover"
          src="https://i.ibb.co/3sc97v9/teenage-mutant-ninja-turtle-figure.webp"
          alt=""
        />
        <img
          className="h-[500px] object-cover"
          src="https://i.ibb.co/x808ZXm/pmdcij-04-cropped.jpg"
          alt=""
        />
        <img
          className="w-96 h-[500px] object-cover"
          src="https://i.ibb.co/88P1sxJ/download.jpg"
          alt=""
        />
        <img
          className="w-96 h-[500px] object-cover"
          src="https://i.ibb.co/Mc6Szc9/images-2.jpg"
          alt=""
        />
      </Slider>
    </div>
  );
};

export default Gallery;
