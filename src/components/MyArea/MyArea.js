import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";

const styles = theme => ({});

class MyArea extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    return (
      <div>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        My Area
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyArea));
