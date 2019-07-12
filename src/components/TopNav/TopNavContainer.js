import { connect } from "react-redux";
import TopNav from "./TopNav";
import Login from "../Login/Login";
import * as actionCreator from "../../store/actions/loginActions";

//Handles mapping Login Props to state Props. Only used for
//reading values.
const mapStateToProps = state => {
  return {
    userName: state.loginR.userName
  };
};

export default connect(mapStateToProps)(TopNav);
