import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Heading from "../../../Heading/Heading";

const SiteOverView = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div data-aos="fade-right">
      <Heading heading="ToyBazaar Overview"/>
      <div className="stats stats-vertical lg:stats-horizontal shadow-lg text-center justify-center items-center mx-14 md:mx-56 lg:mx-80 ">
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
