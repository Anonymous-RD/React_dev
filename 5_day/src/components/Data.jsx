import React from "react";
import Values from "./Values";

function Data(props) {
  console.log(props);
  //   let data = props.value;
  //   console.log("data", data);

  return (
    <div>
      <h1>data</h1>
      {props.value.map((item) => (
        <Values></Values>
      ))}
    </div>
  );

  //   for (let i = 0; i < props.value.length; i++) {
  //     console.log(props.value[i].email);
  //     return <div>Data</div>;
  //   }
}

export default Data;
