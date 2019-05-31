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
            <Typography variant="subtitle1" >
              First Name
            </Typography>
              <TextField
                  id="firstname"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please enter your first name"
                />

            <Typography variant="subtitle1">
                    Last Name
              </Typography>
                    <TextField
                  id="lastname"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please enter your last name"

                /> 


              <Typography variant="subtitle1" >
                    Username
              </Typography>
                    <TextField
                  id="username"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please enter your username"

                /> 
              <Typography variant="subtitle1" >
                    E-Mail Address
              </Typography>
                    <TextField
                  id="email"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please enter your E-mail address"

                /> 
              <Typography variant="subtitle1" >
                    Password
              </Typography>
                    <TextField
                  id="password"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please enter your password"

                /> 
              <Typography variant="subtitle1" >
                    Re-enter Password
              </Typography>
                    <TextField
                  id="reenterpassword"
                  value={this.props.userName}
                  onChange={this.props.onEnterUserName}
                  className={classes.fieldContainer}
                  placeholder="Please re-enter your password"

                /> 
              <Grid container xs={12} className={classes.buttonContainer}>
              <Grid item xs={6}>
                <Link to={{ pathname: "/" }} className={classes.link}>
                  <Button color="secondary">Cancel</Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                  <Button variant="contained" color="secondary" component={Link} to={{ pathname: "/home" }}>
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
