import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
      <div className="carousel min-w-full">
        <div id="slide1" className="carousel-item relative w-full md:space-y-52">
          <img
            src="https://i.ibb.co/JvNVkFC/Website-banner-NA-25-Mar.webp"
            className="object-full md:w-full"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide3" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full md:space-y-52">
          <img
            src="https://i.ibb.co/bbvJ7NZ/Website-banner-collectibles.webp"
            className="object-full md:w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide1" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full md:space-y-52">
          <img
            src="https://i.ibb.co/tpjv1Pv/Website-banner-figures.webp"
            className="object-full md:w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
