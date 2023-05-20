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
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:mx-20" style={{backgroundColor: "#fcfbfd"}}>
      <form onSubmit={handleForRegister}>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left">
              
              <img className="mr-10" src="https://i.ibb.co/1QRyLs8/Welcome-to-Toy-Bazaar.png" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl" style={{backgroundColor: "#262426", color: "#ab73ef"}} >
              <div className="card-body">
              <h3 className="text-2xl text-center mb-2 font-extrabold">Register Your Account</h3>
                <div className="input-group">
                    <span className="font-bold" style={{color: "#ab73ef"}}>Your Name</span>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="input-group">
                    <span className="font-bold" style={{color: "#ab73ef"}}>Phot URL</span>
                  <input
                    type="text"
                    id="photo"
                    name="photo"
                    placeholder="Your Photo URL"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="input-group">
                    <span className="font-bold" style={{color: "#ab73ef"}}>Your Email</span>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="input-group">
                    <span className="font-bold" style={{color: "#ab73ef"}}>Password</span>
                  
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
                  <button className="btn btn-outline" style={{backgroundColor:"#ab73ef"}}>Register</button>
                </div>
                <div>
                <p className="mt-2">
                    Already Have an Account?<Link to="/login" className="btn btn-outline btn-warning">Login</Link>
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
