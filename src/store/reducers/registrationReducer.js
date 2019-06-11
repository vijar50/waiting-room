//Initial State of the app
const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  emailAddress: "",
  password: "",
  confPassword: ""
};

const reducer = (state = initialState, action) => {
  //Copy of the state
  const newState = { ...state };
  //ACTIONS - Switch Statement
  switch (action.type) {
    case "FIRSTNAME":
      return {
        ...state,
        firstName: action.value
      };
    case "LASTNAME":
      return {
        ...state,
        lastName: action.value
      };
    case "USERNAMEF":
      return {
        //create copy of state
        ...state,
        userName: action.value
      };
    case "EMAILADDRESS":
      return {
        ...state,
        emailAddress: action.value
      };
    case "PASSWORDF":
      return {
        ...state,
        password: action.value
      };
    case "CONFPASSWORD":
      return {
        ...state,
        confPassword: action.value
      };
    default:
      break;
  }

  return newState;
};

export default reducer;
