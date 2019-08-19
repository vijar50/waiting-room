import React, { Component, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TopNavContainer from "../TopNav/TopNavContainer";
import CourseCard from "./CoursesCard";
import WelcomeCard from "./WelcomeCard";
import QuizCard from "./QuizCard";
import myStyles from "./styles";

const styles = myStyles;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  
  componentDidMount = async () => {   
    await setTimeout(() => this.initData(), 2000)    
  }

  componentWillUnmount() {
    clearTimeout();
  }

  initData = () => {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    let courseData = user[0].myCourses;
    localStorage.setItem("detail", JSON.stringify(user[0].skills));
    localStorage.setItem("mydetails", JSON.stringify(user[0]));
    // console.log(courseData)
    this.setState({
      courses: courseData
    });
  };

  render() {
    const { classes } = this.props;
    const { courses } = this.state;
    const currentPath = this.props.location.pathname;
    console.log(this.state.courses);
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
              <CourseCard courses={courses}/>
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
