import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { _id,toyName, quantity, email, price, photo, category } = toy;
  const { user } = useContext(AuthContext);



  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
      <th>
        <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
