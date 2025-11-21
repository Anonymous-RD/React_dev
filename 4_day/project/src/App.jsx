import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Value from "./components/Value";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> new data</h1>
      <Value></Value>
    </>
  );
}

export default App;
