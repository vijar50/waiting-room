//Initial State of the app
const initialState = {
  currentUser: "Bob",
  userName: "",
  password: ""
};

const reducer = (state = initialState, action) => {
  //Copy of the state
  const newState = { ...state };
  //ACTIONS - Switch Statement
  switch (action.type) {
    case "USERNAME":
      return {
        //create copy of state
        ...state,
        userName: action.value
      };
    case "PASSWORD":
      return {
        //create copy of state
        ...state,
        password: action.value
      };
    default:
      break;
  }

  return newState;
};

export default reducer;
