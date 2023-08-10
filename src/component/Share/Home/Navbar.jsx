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

  const navOption = (
    <>
      <li>
        <Link className="text-2xl" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/allToys">
          All Toys Figure
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="text-2xl" to="/review">
          Review
        </Link>
      </li>
      <li>
        {user && (
          <Link className="text-2xl" to="/myToys">
            My Toys
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link className="text-2xl" to="/addAToy">
            Add a Toy
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div
      className="lg:mx-20"
      style={{ backgroundColor: "#262426", color: "#fcfbfd" }}
    >
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {navOption}
            </ul>
          </div>

          <Link className="btn btn-ghost normal-case text-xl gap-3">
            <img
              className="w-10 rounded-full"
              src="https://img.freepik.com/free-vector/cute-cow-holding-balloon-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-6546.jpg?w=360&t=st=1684369100~exp=1684369700~hmac=2c0217c84475925711a9a29edced7d6ce62f53d48398d0b759c35068eed9f08e"
              alt="ToyBazaar"
            />
            Toy Bazaar
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end gap-x-10">
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

          {user ? (
            <>
              <button className="btn btn-primary hover:bg-green-700" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-primary hover:bg-green-700">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
