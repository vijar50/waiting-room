import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";

const styles = myStyles;

class ScheduleReminder extends Component {
  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        Schedule Reminder
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(ScheduleReminder));
