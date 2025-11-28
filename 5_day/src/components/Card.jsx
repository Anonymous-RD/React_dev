import React from "react";
import Data from "./Data";

function Card() {
  let value = [
    {
      name: "Shyam",
      age: 25,
      email: "shyam@hgmail.com",
    },
    {
      name: "Tyam",
      age: 23,
      email: "Tyam@hgmail.com",
    },
    {
      name: "sita",
      age: 23,
      email: "sita@hgmail.com",
    },
  ];
  return (
    <div>
      <h1>Card</h1>
      <Data value={value}></Data>
    </div>
  );
}

export default Card;
