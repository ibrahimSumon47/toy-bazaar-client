import Aos from "aos";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    Aos.init();
  });
  const handleSubscribe = () => {
    Swal.fire({
      title: "Subscribe Successfully",
      text: "Welcome to Toy Bazaar",
      icon: "success",
      confirmButtonText: "OK!",
    });
  };
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div
        className=" items-center glass md:px-40 p-5 my-5 shadow-xl justify-center text-center"
        style={{ backgroundColor: "#ab73ef", color: "#fcfbfd" }}
      >
        <span className="text-3xl font-semibold italic">
          Subscribe to our newsletter so you don't miss any discount
        </span>
        <div className="form-control w-80 text-center mx-auto">
          <label className="items-center text-center">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative text-black">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button
              onClick={handleSubscribe}
              className="btn btn-primary absolute top-0 right-0 rounded-l-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
