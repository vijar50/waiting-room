//These actions will be called by the actionCreator

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

export const makeApiCall = () => {
  return dispatch => {
    console.log("makeApiCall invoked.");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(result => result.json())
      .then(posts => dispatch(fetchPost(posts)));
  };
};

// export const loginWithApi = () => {
//   return dispatch => {};
// };
