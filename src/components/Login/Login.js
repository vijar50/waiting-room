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
import myStyles from "./styles";
import { connect } from "react-redux";

const styles = myStyles;
class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={16} className={classes.grid} justify="center">
          <Typography color="secondary" variant="h1">
            The Waiting Room
          </Typography>
        </Grid>
        <Grid container spacing={16} className={classes.grid} justify="center">
          <Paper className={classes.paper}>
            <Typography color="secondary" variant="h4" gutterBottom>
              Login
            </Typography>
            <Grid container spacing={16}>
              <Grid container xs={6}>
                <Grid item xs={3}>
                  <Person color="secondary" className={classes.icon} />
                </Grid>
                <Grid item xs={3}>
                  <Typography color="secondary" variant="h6">
                    Username
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="username"
                  value={this.props.userName}
                  //Get onEnterUserName from LoginContainer.js
                  onChange={this.props.onEnterUserName}
                />
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid container xs={6}>
                <Grid item xs={3}>
                  <Key color="secondary" className={classes.icon} />
                </Grid>
                <Grid item xs={3}>
                  <Typography color="secondary" variant="h6">
                    Password
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="password"
                  type="password"
                  value={this.props.password}
                  //Get onEnterPassword from LoginContainer.js
                  onChange={this.props.onEnterPassword}
                />
              </Grid>
            </Grid>
            <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={4}>
                <Link to={{ pathname: "/register" }} className={classes.link}>
                  <Button color="secondary">Register</Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={{ pathname: "/home" }} className={classes.link}>
                  <Button variant="contained" color="secondary">
                    Login
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={this.props.onMakeApiCall}
                  variant="contained"
                  color="secondary"
                >
                  API-Call
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid item xs={4} />
              <Grid item xs={8}>
                <Typography color="secondary" variant="h6">
                  <div>{this.props.item.id}</div>
                  <div>{this.props.item.title}</div>
                  <div>{this.props.item.body}</div>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <div>{this.props.a}</div>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Login));
