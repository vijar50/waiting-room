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

class CustTech extends Component {
  // componentDidMount() {
  //   //Get record for logged in user
  //   fetch(
  //     `http://localhost:3000/users?userName=${localStorage.getItem("username")}`
  //   )
  //     .then(
  //       response => response.json(),
  //       error => console.log("Error occurred", error)
  //     )
  //     //Store the skills locally
  //     .then(myJson => {
  //       localStorage.setItem("courses", JSON.stringify(myJson[0].myCourses));
  //       console.log("My Courses " + JSON.stringify(myJson[0].myCourses));
  //     });
  // }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopNav currentPath={currentPath} />
        <Grid container>
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
            className={classes.header}
          >
            Customers
          </Typography>
        </Grid>
        <Grid container className={classes.grid}>
          <Grid item md={4} alignItems="baseline">
            <Cards
              cardName="Timmy"
              imageLocation="../assets/image/FireShot Capture 001 - 9 Huge Facts About the Burj Khalifa - Mental Floss - mentalfloss.com.png"
              cardDescription="The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper
              in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj
              Khalifa has been the tallest structure and building in the world since its topping out in 2009."
              employees="6049"
              address="1 Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab Emirates"
              projects={["Fly Plane","Build Car with Steel","MLI","Trixy Rabbit"]}
              technologies={["Java","Python","Go Lang","C++"]}
              externalLink="https://www.burjkhalifa.ae/en/"
            />
          </Grid>
          <Grid item md={4}>
            <Cards
              cardName="Jimmy"
              imageLocation="../assets/image/shutterstock_341129564.0.jpg"
              cardDescription="The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York
              City. It was designed by Shreve, Lamb &amp; Harmon and completed in 1931. The building has a roof height
              of 1,250 feet and stands a total of 1,454 feet tall, including its antenna."
              employees="3376"
              address="20 W 34th St, New York, NY 10001, USA"
              projects={["Murricuh Fug Yah","Test the World","NYPDS"]}
              technologies={["Javascript","Typescript","React","Selenium"]}
              externalLink="https://www.esbnyc.com/"
            />
          </Grid>
          <Grid item md={4}>
            <Cards
              cardName="Nimmy"
              imageLocation="../assets/image/media_hero.jpg"
              cardDescription="The Willis Tower (colloquial: Sears Tower, its name for 36 years) is a
              110-story, 1,450-foot (442.1 m) skyscraper in Chicago, Illinois. At
              completion in 1973, it surpassed the World Trade Center in New York to become
              the tallest building in the world, a title it held for nearly 25 years; it was
              the tallest building in the Western Hemisphere for 41 years, until the new
              One World Trade Center surpassed it in 2014."
              employees="7180"
              address="233 S Wacker Dr, Chicago, IL 60606, USA"
              projects={["Elephant 64","Timmay Tim","CHI","Corporate Mean Guy","Oooh Shiny"]}
              technologies={["Angular","Javascript","C++","PHP"]}
              externalLink="https://www.willistower.com/"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CustTech));
