import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    userName: state.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch actions will go here. To be defined in reducer
    //write a dispatch action to take in what was typed in the username field
    onEnterUserName: e => dispatch({ type: "USERNAME", value: e.target.value }),
    onEnterPassword: e => dispatch({ type: "PASSWORD", value: e.target.value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
