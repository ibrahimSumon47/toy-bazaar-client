import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

const MyToysRow = ({ myToy, handleDelete }) => {
  const { _id, toyName, quantity, email, price, photo, category, details } =
    myToy;

  const handleUpdateToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updateToys = { _id, price, quantity, details };
    console.log(updateToys);

    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your toy has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
      <td>{details}</td>
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
            <form onSubmit={handleUpdateToy}>
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Update</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Update your price"
                  className="input input-bordered"
                  defaultValue={price}
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
                  defaultValue={quantity}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details Update</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Update your price"
                  className="input input-bordered"
                  defaultValue={details}
                />
              </div>
              <div className="modal-action">
              <button>Update</button>
            </div>
            </form>
            
          </div>
        </div>
      </th>
      
    </tr>
  );
};

export default MyToysRow;
