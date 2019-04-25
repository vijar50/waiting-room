import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Person from "@material-ui/icons/Person";
import Key from "@material-ui/icons/VpnKey";
import { Link, withRouter } from "react-router-dom";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
    alignItems: "center",
    marginTop: 50
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    padding: theme.spacing.unit * 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    padding: theme.spacing.unit * 2,
    alignItems: "center",
    marginTop: 10
  },
  icon: {
    fontSize: 32
  },
  link: {
    textDecoration: "none"
  }
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Typography color="primary" variant="h1">
            The Waiting Room
          </Typography>
        </Grid>
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Paper className={classes.paper}>
            <Typography color="primary" variant="h4" gutterBottom>
              Login
            </Typography>
            <Grid container xs={12}>
              <Grid container xs={6}>
                <Grid item xs={3}>
                  <Person color="primary" className={classes.icon} />
                </Grid>
                <Grid item xs={3}>
                  <Typography color="primary" variant="h6">
                    Username
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="username"
                  // value={this.state.username}
                  // onChange={this.handleChange("username")}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid container xs={6}>
                <Grid item xs={3}>
                  <Key color="primary" className={classes.icon} />
                </Grid>
                <Grid item xs={3}>
                  <Typography color="primary" variant="h6">
                    Password
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="password"
                  type="password"
                  // value={this.state.password}
                  // onChange={this.handleChange("password")}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={6}>
                <Link to={{ pathname: "/register" }} className={classes.link}>
                  <Button color="secondary">Register</Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link to={{ pathname: "/home" }} className={classes.link}>
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Login));
