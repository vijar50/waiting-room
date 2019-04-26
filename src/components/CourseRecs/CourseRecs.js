import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";

const styles = theme => ({});

class CourseRecs extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        Course Recommendations
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CourseRecs));
