import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    userLogin(email, password)
    .then(result => {
        navigate(from, {replace: true})
    })
    .catch(error=> {
        console.log(error)
        alert("Please provide register email or password")
        navigate("/")
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="hero min-h-screen bg-indigo-300">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login your Account</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
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
                  <button className="btn btn-primary">Login</button>
                </div>
                <LoginGoogle />
                <div>
                  <p>
                    Already Have an Account?<Link to="/register">Register</Link>
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
