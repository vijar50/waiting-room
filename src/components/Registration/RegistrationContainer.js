import { connect } from "react-redux";
import Registration from "./Registration";
import * as actionCreator from "../../store/actions/registrationActions";

//Registration route "/registration" will come here, then go to the MUI component

//Handles mapping Registration Props to state Props. Only used for
//reading values.
const mapStateToProps = state => {
  return {
    firstName: state.registrationR.firstName,
    lastName: state.registrationR.lastName,
    userName: state.registrationR.userName,
    emailAddress: state.registrationR.emailAddress,
    password: state.registrationR.password,
    confPassword: state.registrationR.confPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //dispatch actions defined in reducer
    onEnterFirstName: e => dispatch(actionCreator.enterFirstName(e)),
    onEnterLastName: e => dispatch(actionCreator.enterLastName(e)),
    onEnterUserName: e => dispatch(actionCreator.enterUserName(e)),
    onEnterEmailAddress: e => dispatch(actionCreator.enterEmailAddress(e)),
    onEnterPassword: e => dispatch(actionCreator.enterPassword(e)),
    onEnterConfPassword: e => dispatch(actionCreator.enterConfPassword(e))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
