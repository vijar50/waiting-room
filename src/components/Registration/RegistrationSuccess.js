import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import myStyles from "./regsuccessstyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = myStyles;

class RegistrationSuccess extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Grid
            container
            spacing={12}
            className={classes.grid}
            justify="center"
          >
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Thank you for registering,
              </Typography>
              <Typography variant="subtitle1">
                please click the link below to login.{" "}
              </Typography>
              <Link to={{ pathname: "/" }} className={classes.link}>
                <Button color="secondary">Login</Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withRouter(withStyles(styles)(RegistrationSuccess));
