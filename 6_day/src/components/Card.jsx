import React, { useState } from "react";
import Data from "./Data";

function Card() {
  let [val, setVal] = useState([]);
  let data = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let resData = res.json();
      // console.log("first");
      // console.log(resData);
      return resData;
    })
    .then((data) => {
      // console.log("Second");
      console.log(data);
      setVal(data);
      console.log(data[1].name);
      console.log(val[1].name);
    });
  // console.log(data);

  // let value =
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
      // <Data data={data}></Data>
    </div>
  );
}

export default Card;
