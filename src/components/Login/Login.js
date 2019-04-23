import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

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
              <Grid item xs={6}>
                <Typography color="primary" variant="h6">
                  Username
                </Typography>
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
              <Grid item xs={6}>
                <Typography color="primary" variant="h6">
                  Password
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="username"
                  className={classes.textField}
                  type="password"
                  // value={this.state.password}
                  // onChange={this.handleChange("password")}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={6}>
                <Button color="secondary">Register</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default /*withRouter*/ withStyles(styles)(Login);
