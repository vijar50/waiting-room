//These actions will be called by the actionCreator

var shajs = require("sha.js");

export const enterUserName = val => {
  return { type: "USERNAME", value: val.target.value };
};

export const enterPassword = val => {
  return { type: "PASSWORD", value: val.target.value };
};

export const fetchPost = posts => {
  console.log("Fetched Posts");
  return {
    type: "FETCH_POST",
    value: posts
  };
};

export const doLogin = loginData => {
  console.log(loginData);
}

export const makeApiCall = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(result => result.json())
      .then(posts => dispatch(fetchPost(posts)));
  };
};

export const login = () => {
  return dispatch => {
    var username = "bob"
    var hashedPassword = shajs("sha256").update("password").digest("hex");

    fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, *",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ username: "bob", password: "password" })
    })
    .then(data => console.log(data));
    //.then(result => result.json())
    //.then(loginData => dispatch(doLogin(loginData)));
  }
}
