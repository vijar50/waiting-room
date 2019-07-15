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
import Divider from "@material-ui/core/Divider";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
const styles = myStyles;

class MyDetails extends Component {

  state = {
    userName: "",
    editMode: false,
    mouseOver: false
  };

  onChangeUserName = user => {
    // this.props.onEnterUserName(user);
      this.setState({
        userName: user.target.value,
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
    const { classes, value } = this.props;
    console.log(currentPath);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <TopNav currentPath={currentPath}/>
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
                <Typography variant="subtitle1">Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField 
                id="name" 
                className={classes.textField}
              />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Email Address</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="emailaddress" className={classes.textField} />
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Phone</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="phone" className={classes.textField} />
              </Grid>
            </Grid>
            <br/>

            <Grid container>
              <Typography variant="h6" gutterBottom color="secondary" className={classes.subheading}>
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
                defaultValue={localStorage.getItem('currentUser')}
                margin="normal"
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
                }}/>
              </Grid>
            </Grid>
            <Grid container className={classes.fieldContainer}>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Password</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField id="password" className={classes.textField} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyDetails));
