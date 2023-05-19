import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTabs = () => {
  const [reactTabs, setReactTabs] = useState([]);
  const url = "http://localhost:5000/reactTabs";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReactTabs(data));
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>Marvel</Tab>
        <Tab>DC</Tab>
        <Tab>Star Wars</Tab>
      </TabList>

      <TabPanel>
        <div className="md:flex gap-5">
          {/* Check if reactTabs has data before accessing its properties */}
          {reactTabs.length > 0 && (
            <>
              {/* Marvel Card 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="" src={reactTabs[0].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[0].toyName}</h2>
                  <p>Price: {reactTabs[0].price}</p>
                  <p>Rating: {reactTabs[0].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
              {/* Marvel Card 2 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={reactTabs[1].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[1].toyName}</h2>
                  <p>Price: {reactTabs[1].price}</p>
                  <p>Rating: {reactTabs[1].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </TabPanel>
      {/* DC */}
      <TabPanel>
        <div className="md:flex gap-5">
          {/* Check if reactTabs has data before accessing its properties */}
          {reactTabs.length > 0 && (
            <>
              {/* DC Card 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="" src={reactTabs[2].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[2].toyName}</h2>
                  <p>Price: {reactTabs[2].price}</p>
                  <p>Rating: {reactTabs[2].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
              {/* DC Card 2 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={reactTabs[3].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[3].toyName}</h2>
                  <p>Price: {reactTabs[3].price}</p>
                  <p>Rating: {reactTabs[3].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </TabPanel>
      {/* Star Wars */}
      <TabPanel>
        <div className="md:flex gap-5">
          {/* Check if reactTabs has data before accessing its properties */}
          {reactTabs.length > 0 && (
            <>
              {/* StarWars Card 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="h-96" src={reactTabs[4].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[4].toyName}</h2>
                  <p>Price: {reactTabs[4].price}</p>
                  <p>Rating: {reactTabs[4].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
              {/* Star Wars Card 2 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={reactTabs[5].photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{reactTabs[5].toyName}</h2>
                  <p>Price: {reactTabs[5].price}</p>
                  <p>Rating: {reactTabs[5].rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTabs;
