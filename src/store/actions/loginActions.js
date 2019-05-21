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
    //Async call to API goes here
    // fetch(``)
    //  .then(res => res.json())
    //  .then(....)
    //  .catch(error)
    //returns a function that after everything resolves
    //it will go to the reducer and everything has what it needs
    //simulate call to server. After 2 sec execute callback func
    // setTimeout(()=>{
    //   //Call the dispatch function which we are parsing as arg above
    //   dispatch({
    //    //expects type and payload
    //    type: "USERNAME",
    //    value: val.target.value
    //   })
    // },2000)
  };
};
