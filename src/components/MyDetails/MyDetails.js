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
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
const styles = myStyles;

class MyDetails extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
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
    let user = localStorage.getItem("loggedInUser");
    let detail = JSON.parse(user);
    this.setState({
      fName: detail[0].fName,
      lName: detail[0].lName,
      email: detail[0].emailAddress,
      phone: detail[0].phone,
      userN: detail[0].userName,
      passW: detail[0].password
    });
  };

  onChangeUserName = user => {
    // this.props.onEnterUserName(user);
    this.setState({
      userName: user.target.value
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMouseOver = event => {
    if (!this.state.mouseOver) {
      this.setState({ mouseOver: true });
    }
  };

  handleMouseOut = event => {
    // The problem is here!!!
    if (this.state.mouseOver) {
      this.setState({ mouseOver: false });
    }
  };

  handleClick = () => {
    this.setState({
      editMode: true,
      mouseOver: false
    });
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
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">First Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="fname"
                  value={this.state.fName}
                  className={classes.textField}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Last Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="lname"
                  value={this.state.lName}
                  className={classes.textField}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Email Address</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="emailaddress" value={this.state.email} className={classes.textField} />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Phone</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="phone" value={this.state.phone} className={classes.textField} />
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
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Username</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="username"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.userN}
                  // error={this.state.email === ""}
                  onChange={this.onChangeUserName}
                  disabled={!this.state.editMode}
                  onMouseEnter={this.handleMouseOver}
                  onMouseLeave={this.handleMouseOut}
                  InputProps={{
                    classes: {
                      disabled: classes.disabled
                    },
                    endAdornment: this.state.mouseOver ? (
                      <InputAdornment position="end">
                        <IconButton onClick={this.handleClick}>
                          <Edit />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Password</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="password" value={this.state.passW} className={classes.textField} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyDetails));
