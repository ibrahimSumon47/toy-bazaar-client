import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { data } from "autoprefixer";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    if (sortField) {
      const sortUrl = `http://localhost:5000/sortToys?toyName=${user?.email}&sort=${sortField}`;
      fetch(sortUrl)
        .then((res) => res.json())
        .then((data) => setMyToys(data))
        .catch((error) => {
          console.log("Error sorting toys:", error);
        });
    }
  }, [sortField]);

  const url = `http://localhost:5000/allToysEmail/${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user, sortField]);

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
                  value={sortField}
                  onChange={(e)=> setSortField(e.target.value)}
                >
                  <option disabled value="">
                    Sort by
                  </option>
                  <option value="asc">Ascending </option>
                  <option value="desc">Descending </option>
                </select>
              </th>
              <th className="">Toy Name</th>
              <th className="">Sub-category</th>
              <th className="">Price</th>
              <th className="">Available Quantity</th>
              <th className="">Details</th>
              <th className="">Update</th>
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
