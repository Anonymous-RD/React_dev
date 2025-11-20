import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Data1 from "./componets/Data1";
import Data2 from "./componets/Data2";

function App() {
  return (
    <>
      <h1>hello</h1>
      <Data1 name="Shyam" age="25" email="shyam@hgmail.com"></Data1>
      <Data1 name="Ram" age="21" email="ram@hgmail.com"></Data1>
      <Data2></Data2>
    </>
  );
}

export default App;
