import React, { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:ml-20 gap-5 md:gap-0 space-y-5 my-5">
      {toys.map((toy, i) => (
        <AllToysCard key={toy._id} toy={toy}></AllToysCard>
      ))}
    </div>
  );
};

export default AllToys;
