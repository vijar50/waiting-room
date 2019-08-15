import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Snackbar from "@material-ui/core/Snackbar";
import Portal from "@material-ui/core/Portal";
import { withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import myStyles from "./styles";

const styles = myStyles;

class FormButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      date: new Date(),
      openSnack: false,
      booking: []
    };
  }
  //sleep function
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  //create async await delay
  showSnackbar = async () => {
    this.setState({
      openSnack: true
    });
    let courseName = this.props.cardName;
    let bookingDate = this.state.date;
    let formattedBookingDate = bookingDate.getDate() + "/" + bookingDate.getMonth() + "/" + bookingDate.getFullYear()
    let booking = { courseName, formattedBookingDate };
    let courses = JSON.parse(localStorage.getItem("courses"));
    courses.push(booking);
    console.log(courses);
    this.updateBackEnd(courses);
    await this.sleep(1000);
    this.handleClose();
  };

  updateBackEnd = data => {
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
        myCourses: data
      })
    });
  };

  changeDate = e => {
    this.setState({
      date: e
    });
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const { open, date, openSnack } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Button size="small" color="secondary" onClick={this.handleClickOpen}>
          Book Course
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Book {this.props.cardName}
          </DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1" color="secondary">
              Course Prerequisites
            </Typography>
            <DialogContentText>{this.props.coursePreReq}</DialogContentText>
            <Typography variant="subtitle1" color="secondary">
              Date
            </Typography>
            <DialogContentText>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  disablePast
                  variant="static"
                  orientation="landscape"
                  openTo="date"
                  value={date}
                  onChange={this.changeDate}
                  className={classes.style}
                />
              </MuiPickersUtilsProvider>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.showSnackbar} color="secondary">
              Book
            </Button>
            <Portal>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={openSnack}
                ContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={
                  <span id="message-id">Your course has been booked!</span>
                }
              />
            </Portal>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(FormButton));
