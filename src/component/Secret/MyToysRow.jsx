import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyToysRow = ({ myToy, handleDelete, handleUpdate }) => {
  const { _id, toyName, quantity, email, price, photo, category, details } =
    myToy;
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    console.log(price,quantity, details);
  };

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
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
      <th>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Please update your Toy</h3>
            <form onSubmit={handleChange}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Update</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Update your price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity Update</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Update your Quantity"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Update your price"
                  className="input input-bordered"
                />
              </div>
            </form>
            <div className="modal-action">
              <label onClick={()=>{handleUpdate}} htmlFor="my-modal-5" className="btn">
                Update
              </label>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default MyToysRow;
