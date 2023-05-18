import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <Link className="btn btn-ghost normal-case text-xl"><img className="w-10 rounded-full" src="https://img.freepik.com/free-vector/cute-cow-holding-balloon-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-6546.jpg?w=360&t=st=1684369100~exp=1684369700~hmac=2c0217c84475925711a9a29edced7d6ce62f53d48398d0b759c35068eed9f08e" alt="ToyBazaar" />ToyBazaar</Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
