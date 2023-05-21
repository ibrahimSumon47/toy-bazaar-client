import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const SiteOverView = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-right">
      <h2
        className="text-center my-10 text-4xl font-bold p-5"
        style={{ backgroundColor: "#ab73ef", color: "#fcfbfd" }}
      >
        ToyBazaar Overview
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow-lg text-center md:mx-96 ">
        <div className="stat px-9">
          <div className="stat-title text-3xl">This Week Total view</div>
          <div className="stat-value text-5xl py-2">31K</div>
          <div className="stat-desc">May 21st - May 28th</div>
        </div>

        <div className="stat">
          <div className="stat-title text-3xl ">Happy Clients Rate</div>
          <div className="stat-value py-2">↗︎(85%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-3xl ">New Registers</div>
          <div className="stat-value py-2">↗︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default SiteOverView;
