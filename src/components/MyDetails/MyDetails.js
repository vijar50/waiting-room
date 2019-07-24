import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const styles = myStyles;

class MyDetails extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      mouseOver: false,
      fName: null,
      lName: null,
      email: null,
      phone: null,
      userN: null,
      passW: null
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    fetch(
      `http://localhost:3000/users?userName=${localStorage.getItem("username")}`
    )
      .then(
        response => response.json(),
        error => console.log("Error occurred", error)
      )
      //Store the skills locally
      .then(myJson => {
        localStorage.setItem("detail", JSON.stringify(myJson));
        console.log(JSON.stringify(myJson));
      });
    let detail = localStorage.getItem("detail");
    let details = JSON.parse(detail);
    this.setState({
      fName: details[0].fName,
      lName: details[0].lName,
      email: details[0].emailAddress,
      phone: details[0].phone,
      userN: details[0].userName,
      passW: details[0].password
    });
  };

  updateBackEnd = () => {
    //get ID for logged in
    let user = localStorage.getItem("loggedInUser");
    let detail = JSON.parse(user);
    //patch back end
    fetch(`http://localhost:3000/users/${detail[0].id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify({
        fName: this.state.fName,
        lName: this.state.lName,
        emailAddress: this.state.email,
        phone: this.state.phone,
        userName: this.state.userN,
        password: this.state.passW
      })
    });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleEdit = () => {
    if (!this.state.editMode) {
      this.setState({
        editMode: true,
        mouseOver: false
      });
    } else {
      this.setState({
        editMode: false,
        mouseOver: false
      });
      console.log("updated");
      //Update Backend
      this.updateBackEnd();
    }
  };

  render() {
    const currentPath = this.props.location.pathname;
    const { classes } = this.props;
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
            My Details
          </Typography>
        </Grid>
        <Grid container className={classes.grid}>
          <Paper className={classes.paper}>
            <Grid container>
              <Typography variant="h6" gutterBottom color="secondary">
                Personal
              </Typography>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">First Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="username"
                    value={this.state.fName}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("fName")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Last Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="username"
                    value={this.state.lName}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("lName")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Email</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="username"
                    value={this.state.email}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("email")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Phone</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="username"
                    value={this.state.phone}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("phone")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <br />

            <Grid container>
              <Typography
                variant="h6"
                gutterBottom
                color="secondary"
                className={classes.subheading}
              >
                Account
              </Typography>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Username</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="username"
                    value={this.state.userN}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("userN")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* ///////////////////////////////////////////////////////////// */}
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Password</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl className={classes.textField}>
                  <Input
                    id="password"
                    value={this.state.passW}
                    disabled={!this.state.editMode}
                    onChange={this.handleChange("passW")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleEdit}>
                          {this.state.editMode ? <Save /> : <Edit />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyDetails));
