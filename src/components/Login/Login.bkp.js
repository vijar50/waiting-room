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
  state = {
    step: 1,
    userHelperText: "",
    passwordHelperText: "",
    errorUser: false,
    errorPassword: false,
    disabled: true,
    userEntered: false,
    passwordEntered: false
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Parse action to reducer and validate the field
  onChangeUser = user => {
    this.props.onEnterUserName(user);
    if (user.target.value.length > 0) {
      this.setState({
        userHelperText: "",
        errorUser: false,
        userEntered: true
      });
    } else {
      this.setState({
        userHelperText: "Please enter a user name",
        errorUser: true,
        userEntered: false
      });
    }
    this.checkCredentials();
  };

  //Parse action to reducer and validate the field
  onChangePassword = password => {
    this.props.onEnterPassword(password);
    if (password.target.value.length > 0) {
      this.setState({
        passwordHelperText: "",
        errorPassword: false,
        passwordEntered: true
      });
    } else {
      this.setState({
        passwordHelperText: "Please enter a password",
        errorPassword: true,
        passwordEntered: false
      });
    }
    this.checkCredentials();
  };

  checkCredentials = () => {
    if (
      this.state.userEntered === true &&
      this.state.passwordEntered === true
    ) {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div className={classes.root}>
            <CssBaseline />
            <Grid
              container
              spacing={16}
              className={classes.grid}
              justify="center"
            >
              <Paper className={classes.paper}>
                <Typography
                  color="secondary"
                  variant="h4"
                  gutterBottom
                  className={classes.header}
                >
                  The Waiting Room
                </Typography>

                <Grid container xs={12} className={classes.buttonContainer}>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={this.nextStep}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Link
                      to={{ pathname: "/register" }}
                      className={classes.link}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                      >
                        Register
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      onClick={this.props.onMakeApiCall}
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                    >
                      API-Call
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography color="secondary" variant="body1">
                      <div>
                        <div>{this.props.item.id}</div>
                        <br />
                        <div>{this.props.item.title}</div>
                        <br />
                        <div>{this.props.item.body}</div>
                      </div>
                      <div>Second Reducer: {this.props.a}</div>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </div>
        );
      case 2:
        return (
          <div>
            <CssBaseline />
            <Grid
              container
              spacing={16}
              className={classes.grid}
              justify="center"
            >
              <Paper className={classes.paper}>
                <Grid container spacing={16} className={classes.fieldContainer}>
                  <Grid container xs={6} className={classes.textLabel}>
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
                      onChange={this.onChangeUser}
                      className={classes.textField}
                      helperText={this.state.userHelperText}
                      error={this.state.errorUser}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={16} className={classes.fieldContainer}>
                  <Grid container xs={6} className={classes.textLabel}>
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
                      onChange={this.onChangePassword}
                      className={classes.textField}
                      helperText={this.state.passwordHelperText}
                      error={this.state.errorPassword}
                    />
                  </Grid>
                </Grid>
                <Grid item className={classes.mainLogin}>
                  <Link to={{ pathname: "/home" }} className={classes.link}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      disabled={this.state.disabled}
                      //Needs to be disabled for username and pw
                      //write pw validation function and
                      //username + pw eval function, use console
                    >
                      Login
                    </Button>
                  </Link>
                </Grid>
                <Grid item className={classes.mainLogin}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    //onClick={this.props.onLoginWithApi}
                    //LOGIN METHOD CALL GOES HERE
                  >
                    Login Test
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </div>
        );
      default:
        break;
    }
  }
}

export default withRouter(withStyles(styles)(Login));
