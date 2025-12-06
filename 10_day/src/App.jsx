import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Github from "./components/Github";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>hii</h1>
      <Github></Github>
    </div>
  );
}

export default App;
