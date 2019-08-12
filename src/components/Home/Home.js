import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TopNavContainer from "../TopNav/TopNavContainer";
import Button from "@material-ui/core/Button";
import CourseCard from "./CoursesCard";
import WelcomeCard from "./WelcomeCard"
import QuizCard from "./QuizCard"
import myStyles from "./styles";

const styles = myStyles;

class Home extends Component {

  componentDidMount() {
    //Get record for logged in user
    fetch(
      `http://localhost:3000/users?userName=${localStorage.getItem("username")}`
    )
      .then(
        response => response.json(),
        error => console.log("Error occurred", error)
      )
      //Store the skills locally
      .then(myJson => {
        localStorage.setItem("courses", JSON.stringify(myJson[0].myCourses));
      });

    let courses = JSON.parse(localStorage.getItem("courses"))

    console.log(courses)
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <TopNavContainer currentPath={currentPath} />
          <Grid container className={classes.grid} spacing={6}>
            <Grid item xs={12} md={4}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <CourseCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <QuizCard />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Home));
