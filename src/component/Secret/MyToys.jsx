import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/allToys?email${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl my-5">My Toys: {myToys.length}</h1>

      <div className="overflow-x-auto md:px-20 w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th>
                
              </th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map(myToy => <MyToysRow key={myToy._id} myToy={myToy}></MyToysRow>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
