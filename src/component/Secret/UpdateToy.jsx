import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = ({}) => {
  useTitle("Update Toy")
const { id } = useParams();
console.log(id);

  const handleUpdateToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updatedToy = { price, quantity, details };
    console.log(updatedToy);
    fetch(`http://localhost:5000/toyUpdateData/${id}`, {
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
    <div className="md:mx-20">
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
            // defaultValue={price}
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
            // defaultValue={quantity}
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
            // defaultValue={details}
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
