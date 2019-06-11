//These actions will be called by the actionCreator

export const enterFirstName = val => {
  return { type: "FIRSTNAME", value: val.target.value };
};

export const enterLastName = val => {
  return { type: "LASTNAME", value: val.target.value };
};

export const enterUserName = val => {
  return { type: "USERNAMEF", value: val.target.value };
};

export const enterEmailAddress = val => {
  return { type: "EMAILADDRESS", value: val.target.value };
};

export const enterPassword = val => {
  return { type: "PASSWORDF", value: val.target.value };
};

export const enterConfPassword = val => {
  return { type: "CONFPASSWORD", value: val.target.value };
};

// export const fetchPost = posts => {
//   console.log("Fetched Posts");
//   return {
//     type: "FETCH_POST",
//     value: posts
//   };
// };

// export const makeApiCall = () => {
//   return dispatch => {
//     console.log("makeApiCall invoked.");
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(result => result.json())
//       .then(posts => dispatch(fetchPost(posts)));
//   };
// };
