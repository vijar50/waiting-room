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
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              className={classes.fieldContainer}
              placeholder="Please enter your first name"
              helperText={this.state.firstNameHelperText}
              error={this.state.errorFirstName}
            />

            <Typography variant="subtitle1">Last Name</Typography>
            <TextField
              id="lastname"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              className={classes.fieldContainer}
              placeholder="Please enter your last name"
              helperText={this.state.lastNameHelperText}
              error={this.state.errorLastName}
            />

            <Typography variant="subtitle1">Username</Typography>
            <TextField
              id="username"
              value={this.state.userName}
              onChange={this.onChangeUserName}
              className={classes.fieldContainer}
              placeholder="Please enter your Username"
              helperText={this.state.userNameHelperText}
              error={this.state.errorUserName}
            />
            <Typography variant="subtitle1">E-Mail Address</Typography>
            <TextField
              id="email"
              value={this.state.emailAddress}
              onChange={this.onChangeEmailAddress}
              className={classes.fieldContainer}
              placeholder="Please enter your E-mail address"
              helperText={this.state.emailAddressHelperText}
              error={this.state.errorEmailAddress}
            />
            <Typography variant="subtitle1">Password</Typography>
            <TextField
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              className={classes.fieldContainer}
              placeholder="Please enter your password"
              helperText={this.state.passwordHelperText}
              error={this.state.errorPassword}
            />
            <Typography variant="subtitle1">Re-enter Password</Typography>
            <TextField
              id="reenterpassword"
              value={this.state.confPassword}
              onChange={this.onChangeConfPassword}
              className={classes.fieldContainer}
              placeholder="Please re-enter your password"
              helperText={this.state.confPasswordHelperText}
              error={this.state.errorConfPassword}
            />
            <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={6}>
                <Link to={{ pathname: "/" }} className={classes.link}>
                  <Button color="secondary">Cancel</Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={{ pathname: "/registrationsuccess" }}
                  onClick={this.handleSubmit}
                >
                  Enter
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Registration));
