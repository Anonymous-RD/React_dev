import React, { useState } from "react";
import "./Github.css";

function Github() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState("");
  function nameHandler(e) {
    console.log(e.target.value);
    name = e.target.value;
    setUsername(name);
  }
  async function submitHandler(e) {
    e.preventDefault();
    console.log("submit handler");
    let data = await fetch(`https://api.github.com/users/${username}`);
    const jsonData = await data.json();
    setData(jsonData);
    console.log(jsonData);
  }
  return (
    <>
      {" "}
      <div>
        <h1>Github Component</h1>
        <form action="" onSubmit={submitHandler}>
          <input placeholder="Enter your username" onChange={nameHandler} />
          <button>Search</button>
        </form>
      </div>
      {username && (
        <div>
          <h2>Your username is: {data.name}</h2>
          <img src={data.avatar_url} alt="" height={200} />
          <li>followers - {data.followers}</li>
        </div>
      )}
    </>
  );
}

export default Github;
