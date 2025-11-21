import React from "react";

function Data1(props) {
  console.log(props);

  return (
    <div>
      <h2>Data = {props.value.name}</h2>
      <h2>Age = {props.value.age}</h2>
      <h2>email = {props.value.email}</h2>
    </div>
  );
}

export default Data1;
