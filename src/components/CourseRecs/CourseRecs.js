import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import Cards from "./Cards";
import myStyles from "./styles";

const styles = myStyles;

class CourseRecs extends Component {
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        <Grid container>
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
            className={classes.header}
          >
            Course Recommendations
          </Typography>
        </Grid>
        <Grid container className={classes.grid}>
          <Cards
            cardName="Developing Applications using ReactJS"
            imageLocation="../assets/image/1y6C4nSvy2Woe0m7bWEn4BA.png"
            cardBody="This three-day course is designed for developers 
            who are already familiar with JavaScript, including ES6, 
            and wish to learn how to create User Interfaces using the 
            ReactJS library. It will discuss how ReactJS can be used 
            to create reusable, interactive UI components, single 
            page applications using React Router and an introduction 
            to Flux and Redux. The aim of the course is that 
            delegates develop their skills, knowledge and 
            understanding so that they can confidently use ReactJS 
            to create User Interfaces."
            externalLink="https://www.qa.com/course-catalogue/courses/developing-applications-using-reactjs-qareactjs/"
          />
        </Grid>
        <Grid container className={classes.grid}>
          <Cards
            cardName="Web Development Fundamentals - Javascript"
            imageLocation="../assets/image/javascript-illustration.png"
            cardBody="This course follows on from Web Development 
            Fundamentals – HTML and CSS (QAHTMLCSS) to add the basics 
            for the third skill needed for web development, JavaScript. 
            This course, using the latest revision of JavaScript and 
            developer tools to allow this, starts with the basics 
            needed to write simple scripts and builds on this to 
            prepare you for using modern JavaScript frameworks and 
            libraries such as React and Angular."
            externalLink="https://www.qa.com/course-catalogue/courses/web-development-fundamentals-javascript-qajsfund/"
          />
        </Grid>
        <Grid container className={classes.grid}>
          <Cards
            cardName="Developing on AWS"
            imageLocation="../assets/image/1280px-AmazonWebservices_Logo.svg.png"
            cardBody="Developing on AWS helps developers understand how 
            to use the AWS SDK to develop secure and scalable cloud 
            applications. The course provides in-depth knowledge about 
            how to interact with AWS using code and covers key concepts, 
            best practices, and troubleshooting tips."
            externalLink="https://www.qa.com/course-catalogue/courses/developing-on-aws-amwsd/"
          />
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CourseRecs));
