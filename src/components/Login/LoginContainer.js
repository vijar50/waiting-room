import { connect } from "react-redux";
import Login from "./Login";
import * as actionCreator from "../../store/actions/loginActions";

//Login route "/" will come here, then go to the MUI component

//Handles mapping Login Props to state Props. Only used for
//reading values.
const mapStateToProps = state => {
  return {
    userName: state.userName,
    password: state.password,
    item: state.item
    // onMakeApiCall: state.onMakeApiCall
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch actions defined in reducer
    onEnterUserName: e => dispatch(actionCreator.enterUserName(e)),
    onEnterPassword: e => dispatch(actionCreator.enterPassword(e)),
    onMakeApiCall: () => dispatch(actionCreator.makeApiCall()),
    onLogin: () => dispatch(actionCreator.login())
    //NOTE: we will call loginAsync from loginActions.js
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
