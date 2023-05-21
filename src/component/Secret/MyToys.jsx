import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState();

  const url = `http://localhost:5000/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSort = (e) => {
    const selectedOrder = e.target.value;
    let sortedToys = [...myToys];

    if (selectedOrder === "ascending") {
      sortedToys.sort((a, b) => a.price - b.price);
    } else if (selectedOrder === "descending") {
      sortedToys.sort((a, b) => b.price - a.price);
    }

    setMyToys(sortedToys);
    setSortOrder(selectedOrder);
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-5">My Toys: {myToys.length}</h1>

      <div className="overflow-x-auto md:px-20 w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th>
                <select
                  className="select select-bordered"
                  value={sortOrder}
                  onChange={handleSort}
                >
                  <option disabled selected>
                    Sort by
                  </option>
                  <option value="ascending">Low Price</option>
                  <option value="descending">High Price</option>
                </select>
              </th>
              <th className="text-center">Toy Name</th>
              <th className="text-center">Sub-category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Details</th>
              <th className="text-center">Update</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
