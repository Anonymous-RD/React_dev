import React, { useEffect, useState } from "react";
import Data from "./Data";

function Card() {
  let [val, setVal] = useState([]);
  let [loading, setLoading] = useState(false);
  // let load = true;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let jsondata = await data.json();
      setVal(jsondata);
      console.log(data);
      setLoading(false);
    }
    fetchData();
    return console.log("unmount");
  }, []);

  return (
    <div>
      <h1>Card</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <h6>
          {" "}
          {val.map((item) => (
            <ul>
              <li>
                {item.name} - {item.email}
              </li>
              <li>{item.address.city}</li>
            </ul>
          ))}
        </h6>
      )}

      {/* // <Data data={data}></Data> */}
    </div>
  );
}

export default Card;
