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
        console.log("My Courses " + JSON.stringify(myJson[0].myCourses));
      });
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <React.Fragment>
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
            coursePreReq="A solid understanding of JavaScript and preferably 
            attendance at the following QA courses “Programming with
            JavaScript” and “Next Generation JavaScript: ECMAScript 
            2015” (or equivalent programming experience)."
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
            coursePreReq="Delegates MUST have HTML and CSS skills
            equivalent to those provided by the Web Development 
            Fundamentals – HTML and CSS course (http://www.qa.com/
            QAHTMLCSS). Familiarity with programming would be beneficial, we 
            recommend Programming Foundations (www.qa.com/QAPROGFOU) 
            to new developers."
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
            coursePreReq="In-depth knowledge of at least one high-level 
            programming language. Working knowledge of core AWS services 
            and public cloud implementation."
          />
        </Grid>
        <Grid container className={classes.grid}>
          <Cards
            cardName="LEADING SAFE"
            imageLocation="../assets/image/Screen-Shot-2018-08-08-at-3.31.58-PM.png"
            cardBody="This two-day course teaches the Lean-Agile principles and 
            practices of the Scaled Agile Framework® (SAFe®). You’ll learn how to 
            execute and release value through Agile Release Trains, how to build an 
            Agile Portfolio, and how to lead a Lean-Agile transformation at enterprise 
            scale. You will gain an understanding of the Lean-Agile mindset and how 
            to apply the principles and practices of SAFe to support Agile teams, 
            programs, program portfolio management, and to coordinate large Value 
            Streams. Attending the class prepares you to take the exam and become 
            a certified SAFe® Agilist (SA)."
            externalLink="https://www.qa.com/course-catalogue/courses/leading-safe-qasafel/"
            coursePreReq="All are welcome to attend the course, regardless of experience.
            However, the following prerequisites are highly recommended for those who
            intend to take the SAFe® 4.6 Agilist (SA) certification exam:
            5+ years’ experience in software development, testing, business analysis, 
            product, or project management and experience in Scrum."
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CourseRecs));
