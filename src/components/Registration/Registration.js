import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, withRouter } from "react-router-dom";
import myStyles from "./styles";

const styles = myStyles;
class Registration extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        Registration Form changeMe!!!!
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Registration));
