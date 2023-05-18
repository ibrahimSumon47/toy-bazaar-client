import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, logout } = useContext(AuthContext);

  const handleForRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password, { setDisplayName: false })
      .then((result) => {
        logout();
        const createdUser = result.user;
        form.reset();
        updateProfile(createdUser, {
          displayName: name,
          photo: photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleForRegister}>
        <div className="hero min-h-screen bg-indigo-300">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                Please Register your Account
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    id="photo"
                    name="photo"
                    placeholder="Your Photo URL"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <div>
                  <p>
                    Already Have an Account?<Link to="/login">Login</Link>
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

export default Register;
