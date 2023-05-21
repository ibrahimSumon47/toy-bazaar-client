import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const AllToysRow = ({ toy }) => {
  const { _id, toyName, quantity, sellerName, price, photo, category } = toy;

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
        <Link to={`/allToyDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
