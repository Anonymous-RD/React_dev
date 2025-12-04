let data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    let resData = res.json();
    console.log("first");
    console.log(resData);
    return resData;
  })
  .then((data) => {
    console.log("Second");
    console.log(data);
  });
console.log(data);
