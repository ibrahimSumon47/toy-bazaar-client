import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddAToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;

    const toyAddedBy = {
      photo,
      toyName,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
    };
    console.log(toyAddedBy);

    fetch("http://localhost:5000/allToys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyAddedBy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mx-10 md:mx-20">
      <form onSubmit={handleAddAToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Toy Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            name="toyName"
            placeholder="Toy Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.displayName}
            placeholder="Seller-Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="Toys Category"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price of the toy"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered"
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
          />
        </div>

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Add A Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
