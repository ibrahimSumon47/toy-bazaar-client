import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login")
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        alert("Please provide register email or password");
        navigate("/login");
      });
  };

  return (
    <div className="md:mx-20" style={{ backgroundColor: "#fcfbfd" }}>
      <form onSubmit={handleLogin}>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left">
              <img
                className="h-96"
                src="https://i.ibb.co/9mPDv3H/Gam-On-1.png"
                alt=""
              />
            </div>

            <div
              className="card flex-shrink-0 w-full max-w-sm shadow-2xl"
              style={{ backgroundColor: "#262426", color: "#ab73ef" }}
            >
              <div className="card-body">
                <h3 className="text-3xl text-center mb-5 font-extrabold">
                  Login You Account
                </h3>
                <div className="input-group">
                  <span className="font-bold " style={{ color: "#ab73ef" }}>
                    Email
                  </span>

                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered w-96"
                  />
                </div>
                <div className="input-group ">
                  <span className="font-bold" style={{ color: "#ab73ef" }}>
                    Password
                  </span>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn btn-outline"
                    style={{ backgroundColor: "#ab73ef" }}
                  >
                    Login
                  </button>
                </div>
                <LoginGoogle />
                <div>
                  <p className="mt-2">
                    New to this site?
                    <Link
                      to="/register"
                      className="btn btn-outline btn-warning"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
