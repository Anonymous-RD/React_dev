import React from "react";

function Data1(props) {
  console.log(props);

  return (
    <div>
      <h2>Data = {props.name}</h2>
      <h2>Age = {props.age}</h2>
      <h2>email = {props.email}</h2>
    </div>
  );
}

export default Data1;
