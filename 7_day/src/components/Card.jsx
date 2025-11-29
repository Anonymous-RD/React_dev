import React, { useEffect, useState } from "react";
import Data from "./Data";

function Card() {
  let [val, setVal] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let jsondata = await data.json();
      setVal(jsondata);
    }
    fetchData();
    // let data = fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     let resData = res.json();
    //     return resData;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setVal(data);
    //   });
    return console.log("unmount");
  }, []);
  return (
    <div>
      <h1>Card</h1>
      {val.map((item) => (
        <ul>
          <li>
            {item.name} - {item.email}
          </li>
          <li>{item.address.city}</li>
        </ul>
      ))}
      {/* // <Data data={data}></Data> */}
    </div>
  );
}

export default Card;
