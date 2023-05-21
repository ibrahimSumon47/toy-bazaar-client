import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ myToy, handleDelete }) => {
  const { _id, toyName, quantity, email, price, photo, category, details } =
    myToy;

  

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{details}</td>
      <th>
        <Link to={`/updateToy/${_id}`}><button>Update</button></Link>
      </th>
      
    </tr>
  );
};

export default MyToysRow;
