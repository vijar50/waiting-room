import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, withRouter } from "react-router-dom";
import myStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = myStyles;
class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    emailAddress: "",
    password: "",
    confPassword: "",
    firstNameHelperText: "",
    lastNameHelperText: "",
    userNameHelperText: "",
    emailAddressHelperText: "",
    passwordHelperText: "",
    confPasswordHelperText: "",
    errorFirstName: false,
    errorLastName: false,
    errorUserName: false,
    errorEmailAddress: false,
    errorPassword: false,
    errorConfPassword: false,
    disabled: true
  };

  onChangeFirstName = fname => {
    this.props.onEnterFirstName(fname);
    if (fname.target.value.length > 0) {
      this.setState({
        firstName: fname.target.value,
        errorFirstName: false,
        firstNameHelperText: ""
      });
    } else {
      this.setState({
        firstName: fname.target.value,
        errorFirstName: true,
        firstNameHelperText: "Please enter a first name"
      });
      console.log("Please enter a first name");
    }
  };

  onChangeLastName = lname => {
    this.props.onEnterLastName(lname);
    if (lname.target.value.length > 0) {
      this.setState({
        lastName: lname.target.value,
        errorLastName: false,
        lastNameHelperText: ""
      });
    } else {
      this.setState({
        lastName: lname.target.value,
        errorLastName: true,
        lastNameHelperText: "Please enter a last name"
      });
      console.log("Please enter a last name");
    }
  };

  onChangeUserName = user => {
    this.props.onEnterUserName(user);
    if (user.target.value.length > 0) {
      this.setState({
        userName: user.target.value,
        errorUserName: false,
        userNameHelperText: ""
      });
    } else {
      this.setState({
        userName: user.target.value,
        errorUserName: true,
        userNameHelperText: "Please enter a user name"
      });
      console.log("Please enter a user name");
    }
  };

  onChangeEmailAddress = email => {
    this.props.onEnterEmailAddress(email);
    if (email.target.value.length > 0) {
      this.setState({
        emailAddress: email.target.value,
        errorEmailAddress: false,
        emailAddressHelperText: ""
      });
    } else {
      this.setState({
        emailAddress: email.target.value,
        errorEmailAddress: true,
        emailAddressHelperText: "Please enter a email address"
      });
      console.log("Please enter a email address");
    }
  };

  onChangePassword = password => {
    this.props.onEnterPassword(password);
    if (password.target.value.length > 0) {
      this.setState({
        password: password.target.value,
        errorPassword: false,
        passwordHelperText: ""
      });
    } else {
      this.setState({
        password: password.target.value,
        errorPassword: false,
        passwordHelperText: "Please enter a password"
      });
      console.log("Please enter a password");
    }
  };

  onChangeConfPassword = cpassword => {
    this.props.onEnterConfPassword(cpassword);
    if (cpassword.target.value.length > 0) {
      this.setState({
        confPassword: cpassword.target.value,
        errorConfPassword: false,
        confPasswordHelperText: ""
      });
    } else {
      this.setState({
        confPassword: cpassword.target.value,
        errorConfPassword: true,
        confPasswordHelperText: "Please enter a confirmation password"
      });
      console.log("Please enter a conf password");
    }
  };

  handleSubmit = () => {
    const {
      firstName,
      lastName,
      userName,
      emailAddress,
      password
    } = this.state;

    this.props.onRegister(
      firstName,
      lastName,
      userName,
      emailAddress,
      password
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Typography color="secondary" variant="h2">
            Registration form
          </Typography>
        </Grid>
        <Grid container spacing={12} className={classes.grid} justify="center">
          <Paper className={classes.paper}>
            <Typography variant="subtitle1">First Name</Typography>
            <TextField
              id="firstname"
              label="Please enter your first Name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              className={classes.fieldContainer}
              helperText={this.state.firstNameHelperText}
              error={this.state.errorFirstName}
            />

            <Typography variant="subtitle1">Last Name</Typography>
            <TextField
              id="lastname"
              label="Please enter your last Name"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              className={classes.fieldContainer}
              helperText={this.state.lastNameHelperText}
              error={this.state.errorLastName}
            />

            <Typography variant="subtitle1">Username</Typography>
            <TextField
              id="username"
              label="Please enter your Username"
              value={this.state.userName}
              onChange={this.onChangeUserName}
              className={classes.fieldContainer}
              helperText={this.state.userNameHelperText}
              error={this.state.errorUserName}
            />
            <Typography variant="subtitle1">E-Mail Address</Typography>
            <TextField
              id="email"
              label="Please enter your E-Mail Address"
              value={this.state.emailAddress}
              onChange={this.onChangeEmailAddress}
              className={classes.fieldContainer}
              helperText={this.state.emailAddressHelperText}
              error={this.state.errorEmailAddress}
            />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              id="password"
              label="Please enter your password "
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              className={classes.fieldContainer}
              helperText={this.state.passwordHelperText}
              error={this.state.errorPassword}
            />
            <Typography variant="subtitle1">Re-enter Password</Typography>
            <TextField
              id="reenterpassword"
              label="Please enter your first Name"
              value={this.state.confPassword}
              onChange={this.onChangeConfPassword}
              className={classes.fieldContainer}
              helperText={this.state.confPasswordHelperText}
              error={this.state.errorConfPassword}
            />
          </Paper>
          <div className={classes.grid}>
          <Grid
            container
            className={classes.buttonContainer}
          >
            <Grid item xs={6}>
              <Link to={{ pathname: "/" }} className={classes.link}>
                <Button color="secondary"
                className={classes.button}>Cancel</Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                component={Link}
                to={{ pathname: "/registrationsuccess" }}
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          </div>
        </Grid>
        
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Registration));
