//Reducer for Home Dashboard
const initialState = {
  a: 1
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_A") {
    return {
      ...state,
      //since we cannot access a from b, we need to get it from
      //the top level where we click on event that parses prop
      //as a payload. When it goes to the reducer it will come in
      //as an action.
      a: state.a + 1
    };
  }
  return state;
};

export default reducer;
