import React from "react";
import Values from "./Values";

function Data(props) {
  console.log("props", props);

  return (
    <div>
      <h1>data</h1>
      {/* {props.data.map((item) => (
        <ol>
          <li>{item.name}</li>
          <li>{item.age}</li>
          <li>{item.email}</li>
        </ol>
      ))} */}
    </div>
  );
}

export default Data;
