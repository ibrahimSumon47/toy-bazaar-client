import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
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
    <div>
      <h1 className="text-center text-5xl my-5 font-bold italic">
        All Brands are here
      </h1>

      <Slider {...settings}>
        <img className="md:h-96" src="https://i.ibb.co/DGYKg0S/download.png" alt="" />
        <img className="md:h-96" src="https://i.ibb.co/BzQ3JQ0/Marvel-Logo-svg.png" alt="" />
        <img className="md:h-96"
          src="https://i.ibb.co/bJzrgvg/2fbc5677b53a19db571ae40f252b749b.webp"
          alt=""
        />
        <img className="md:h-96"
          src="https://i.ibb.co/cbWGj54/png-clipart-teenage-mutant-ninja-turtles-logo-teenage-mutant-ninja-turtles-text-logo.png"
          alt=""
        />
      </Slider>
    </div>
  );
};

export default Brands;
