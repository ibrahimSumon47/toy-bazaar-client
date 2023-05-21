import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const updateAToy = useLoaderData();
  const { _id, price, quantity, details } = updateAToy;

  const handleUpdateToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updatedToy = { price, quantity, details };

    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdateToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price of the toy"
            className="input input-bordered"
            defaultValue={updateAToy[0].price}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="Available Quantity"
            className="input input-bordered"
            defaultValue={updateAToy[0].quantity}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details of the toy</span>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Details of the toy"
            className="input input-bordered"
            defaultValue={updateAToy[0].details}
          />
        </div>
        <div className="form-control my-6">
          <input className="btn btn-primary" type="submit" value="Update Toy" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
