import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-20">
      <footer className="flex justify-between p-10 bg-neutral text-neutral-content">
        <Link to="/">
          <div className="">
            <img
              className="h-14"
              src="https://img.freepik.com/free-vector/cute-cow-holding-balloon-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-6546.jpg?w=360&t=st=1684369100~exp=1684369700~hmac=2c0217c84475925711a9a29edced7d6ce62f53d48398d0b759c35068eed9f08e"
              alt=""
            />
            <p className="font-bold">ToyBazaar</p>
          </div>
        </Link>
        <div className="flex flex-col">
          <span className="footer-title">ToyBazaar</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">About</a>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Address</span>
          <a>House no: 764,</a>
          <a>Polash Market, Board Bazar</a>
          <a>Gazipur</a>
          <a>1704</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div>
        <footer className="footer footer-center p-4 bg-neutral text-white">
          <div>
            <p>Copyright © 2023 - All right reserved by ToyBazaar Ltd</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;