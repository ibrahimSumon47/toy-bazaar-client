import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mx-10 text-center">
      <div>
        <div className="md:mx-[500px]">
          <img className="" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1684635222~exp=1684635822~hmac=9110e1c344e5eb4f8289fb1a4d76148867d564cbbe583a74fed84fe1b01b3264" alt="" />
        </div>
        <h1 className="text-5xl mt-10">
          404 - Page not found
        </h1>
        <Link to = {"/"}>
          <button className="btn bg-indigo-400 text-slate-50 font-bold w-32 rounded-lg my-10">Go home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
