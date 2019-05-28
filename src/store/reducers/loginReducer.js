//Initial State of the app
const initialState = {
  userName: "",
  password: "",
  item: ""
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
        ...state,
        password: action.value
      };
    case "FETCH_POST":
      return {
        ...state,
        item: action.value
      };
    default:
      break;
  }

  return newState;
};

export default reducer;
