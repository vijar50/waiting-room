import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";

const styles = myStyles;

class MyBookings extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { title: "Course Name", field: "courseName" },
        { title: "Date", field: "formattedBookingDate" }
      ],
      data: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    await setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      1200
    );
    this.getBackend()
  };

  getBackend = () => {
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
        localStorage.setItem("latest", JSON.stringify(myJson[0].myCourses));
        // localStorage.setItem("detail", myJson[0].skills))
      });
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

  render() {
    const { classes } = this.props;
    const { columns, loading } = this.state;
    const currentPath = this.props.location.pathname;
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
            My Bookings
          </Typography>
        </Grid>
        <Grid container className={classes.grid}>
          {!loading ? (
 <MaterialTable
 title=""
 options={{
   search: false
 }}
 columns={columns}
 data={query =>
   new Promise(async (resolve, reject) => {
     // await setTimeout(() => this.getBackend(), 600) 
     this.getBackend()                
     // let str = localStorage.getItem("detail");
     let booking = JSON.parse(localStorage.getItem("latest"));
     // let booking = str[0].myCourses
     console.log(booking);
     // prepare your data and then call resolve like this:
     resolve({
       data: booking, // your data array
       page: 1, // current page number
       totalCount: 10 // total page number
     });
     //Update state
     this.setState({
       data: booking
     });
   })
 }
 editable={{              
   onRowDelete: oldData =>
     new Promise(resolve => {
       setTimeout(() => {
         resolve();
         let data = [...this.state.data];
         data.splice(data.indexOf(oldData), 1);
         console.log(data);
         this.setState({ data: data });
         //Send update to back end
         this.updateBackEnd(data);
       }, 600);
     })
 }}
/>

          ) : (
            <CircularProgress
            className={classes.progress}
            color="secondary"
            size={80}
          />
          )}
         
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MyBookings));
