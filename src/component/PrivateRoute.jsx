import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div
        className="radial-progress"
        style={{ "--value": "100", "--size": "12rem", "--thickness": "2px" }}
      >
        100%
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
