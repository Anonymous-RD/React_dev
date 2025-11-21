import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Data1 from "./componets/Data1";
import Data2 from "./componets/Data2";

function App() {
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
  ];
  return (
    <>
      <h1>hello</h1>
      <Data1 value={value[0]}></Data1>
      <Data1 value={value[1]}></Data1>
      <Data2></Data2>
    </>
  );
}

export default App;
