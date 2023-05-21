import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle("All Toys");
  const [searchText, setSearchText] = useState("");

  const url = `http://localhost:5000/allToys`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/allToysSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  };
  return (
    <div className="md:mx-20">
      <h2 className="text-5xl my-3 text-center font-bold">
        All Toys Length: {toys.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              <div className="text-center">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  className="p-1"
                />{" "}
                <button onClick={handleSearch}>Search</button>
              </div>
              </th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

// {toys.map((toy) => (
//     <AllToysRow key={toy._id} toy={toy}></AllToysRow>
//   ))}
