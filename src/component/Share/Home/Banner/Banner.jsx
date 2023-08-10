import React from "react";
import "./Banner.css";
import Slider from "react-slick";

const Banner = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings} className="">
        <div>
          <img className="w-full h-[50vh] lg:h-[500px]" src="https://i.ibb.co/JvNVkFC/Website-banner-NA-25-Mar.webp"/>
        </div>
        <div>
          <img className="w-full h-[50vh] lg:h-[500px]" src="https://i.ibb.co/bbvJ7NZ/Website-banner-collectibles.webp"/>
        </div>
        <div>
          <img className="w-full h-[50vh] lg:h-[500px]" src="https://i.ibb.co/tpjv1Pv/Website-banner-figures.webp"/>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
