import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Field from "./Field";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "@material-ui/core/Input";
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
      passW: null,
      loading: true
      // loading: true
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount = async () => {
    await setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      2000
    );
    this.getDetails()
  };

  getDetails = () => {
    //Get record for logged in user
    fetch(
      `http://localhost:3000/users?userName=${localStorage.getItem("username")}`
    )
      .then(
        response => response.json(),
        error => console.log("Error occurred", error)
      )
      //Store the skills locally
      .then(myJson => {
        localStorage.setItem("mydetails", JSON.stringify(myJson[0]));
        // console.log(localStorage.getItem("mydetails"))
      });
    let detail = localStorage.getItem("mydetails");
    let details = JSON.parse(detail);

    this.setState({
      fName: details.fName,
      lName: details.lName,
      email: details.emailAddress,
      phone: details.phone,
      userN: details.userName,
      passW: details.password
    });
  };

  updateBackEnd = async () => {
    //get ID for logged in
    let user = localStorage.getItem("mydetails");
    let detail = JSON.parse(user);
    //patch back end
    await setTimeout(
      fetch(`http://localhost:3000/users/${detail.id}`, {
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
      }),
      2000
    );
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleEdit = async () => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve()
        if (!this.state.editMode) {
          this.setState({
            editMode: true,
            mouseOver: false,
            loading: true
          });
        } else {
          this.setState({
            editMode: false,
            mouseOver: false
          });
          this.updateBackEnd();
        }
      },500);
    });
  };

  render() {
    const currentPath = this.props.location.pathname;
    const { classes } = this.props;
    const { loading } = this.state;
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
            <Grid container className={classes.fieldContainer}>
              <Field
                title="First Name"
                id="firstname"
                value={this.state.fName}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("fName")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Field
                title="Last Name"
                id="lastname"
                value={this.state.lName}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("lName")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Field
                title="Email"
                id="email"
                value={this.state.email}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("email")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Field
                title="Phone"
                id="phone"
                value={this.state.phone}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("phone")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
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
            <Grid container className={classes.fieldContainer}>
              <Field
                title="Username"
                id="username"
                value={this.state.userN}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("userN")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Field
                title="Password"
                id="password"
                value={this.state.passW}
                disabled={!this.state.editMode}
                handleCh={this.handleChange("passW")}
                handleEd={this.handleEdit}
                edit={this.state.editMode}
                loading={loading}
              />
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyDetails));
