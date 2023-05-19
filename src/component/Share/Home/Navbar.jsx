import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-10 md:mx-20 my-5" style={{backgroundColor: "#c3af75"}}>
      <div className="navbar">
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
                <Link to="/contact">All Toy Figurs</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>

          <Link className="btn btn-ghost normal-case text-xl gap-3">
            <img
              className="w-10 rounded-full"
              src="https://img.freepik.com/free-vector/cute-cow-holding-balloon-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-6546.jpg?w=360&t=st=1684369100~exp=1684369700~hmac=2c0217c84475925711a9a29edced7d6ce62f53d48398d0b759c35068eed9f08e"
              alt="ToyBazaar"
            />
            ToyBazaar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                style={{ textDecoration: "none" }}
                className={`${
                  location.pathname === "/"
                    ? "bg-red-500 p-5 border rounded-lg"
                    : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              style={{ textDecoration: "none" }}
              className={`${
                location.pathname === "/blog"
                  ? "bg-red-500 p-5 border rounded-lg"
                  : ""
              }`}
              to="/blog"
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}
                className={`${
                  location.pathname === "/allToys"
                    ? "bg-red-500 p-5 border rounded-lg"
                    : ""
                }`}
                to="/allToys"
              >All Toys Figure</Link>
            </li>
            <li>
              {user && (
                <div>
                  <img
                    title={user.displayName}
                    className="rounded-xl"
                    style={{ width: "30px", height: "30px" }}
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              )}
            </li>
            <li>
              {user ? (
                <div className="">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <Link
                  style={{ textDecoration: "none" }}
                  className={`${
                    location.pathname === "/login"
                      ? "bg-red-500 p-5 border rounded-lg"
                      : ""
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <></>
              ) : (
                <Link
                  style={{ textDecoration: "none" }}
                  className={`${
                    location.pathname === "/register"
                      ? "bg-red-500 p-5 border rounded-lg"
                      : ""
                  }`}
                  to="/register"
                >
                  Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
