import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllToysRow = ({ toy }) => {
  const { _id, toyName, quantity, sellerName, price, photo, category } = toy;
  const {user} = useContext(AuthContext)

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Have To Login First!!",
      });
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
          <div>
            
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/allToyDetails/${_id}`}><button onClick={handleViewDetails} className="btn btn-primary">Details</button></Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
