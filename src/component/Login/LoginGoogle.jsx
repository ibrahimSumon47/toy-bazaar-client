import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LoginGoogle = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignInGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedGoogle = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex gap-2 mt-5 border p-1 px-4  rounded focus:outline-none focus:shadow-outline bg-slate-50 items-center pl-24">
      <button
        className="text-black mb-1 font-semibold mt-2"
        onClick={handleSignInGoogle}
      >
        Login with Google{" "}
      </button>
    </div>
  );
};

export default LoginGoogle;
