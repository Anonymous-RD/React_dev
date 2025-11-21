import React, { useState } from "react";

function Value() {
  const [data, setData] = useState("bottle");
  function onClickHandler() {
    console.log("Hello");
    setData("sunflower");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={onClickHandler}>click</button>
    </div>
  );
}

export default Value;
