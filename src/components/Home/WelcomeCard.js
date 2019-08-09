import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Edit from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Link, Redirect, withRouter } from "react-router-dom";
import myStyles from "./styles";

const styles = myStyles;

class WelcomeCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card}>
          <CardActionArea>
          <CardMedia
              component="img"
              height="196"
              className={classes.media}
              image="../assets/image/0_VonKIQ1MGgD-SaZo_.jpeg"
              title="React Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color="secondary">
                Welcome!
              </Typography>

              <Typography variant="body1">
                Get started with the waiting room by browsing our courses!
              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary" component={Link} to={{pathname: "/courserecs"}}>
              View Courses
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(WelcomeCard));
