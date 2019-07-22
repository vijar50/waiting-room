import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";

const styles = myStyles;
var user = localStorage.getItem("loggedInUser");
var detail = JSON.parse(user);
class MySkills extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Type", field: "type" },
        { title: "Experience (years)", field: "experience", type: "numeric" }
      ],
      data: []
    };
  }

  render() {
    const { classes } = this.props;
    const { columns } = this.state;
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
            My Skills
          </Typography>
        </Grid>
        <Grid container className={classes.grid}>
          <MaterialTable
            title="Skills"
            columns={columns}
            data={query =>
              new Promise((resolve, reject) => {
                //Get record for logged in user
                fetch(
                  `http://localhost:3000/users?userName=${localStorage.getItem(
                    "username"
                  )}`
                )
                  .then(
                    response => response.json(),
                    error => console.log("Error occurred", error)
                  )
                  //Store the skills locally
                  .then(myJson => {
                    localStorage.setItem(
                      "detail",
                      JSON.stringify(myJson[0].skills[0])
                    );
                    // console.log(localStorage.getItem("detail"))
                    // localStorage.setItem("detail", myJson[0].skills))
                  });
                //Convert string to parseable format
                let str = localStorage.getItem("detail");
                // let myStr = str.slice(1, -1);
                console.log(str);
                // prepare your data and then call resolve like this:
                resolve({
                  data: JSON.parse(str), // your data array
                  page: 1, // current page number
                  totalCount: 10 // total page number
                });
                this.setState({
                  data: JSON.parse(str)
                })
                // console.log(`User ID: ${detail[0].skills}`);
              })
            }
            editable={{
              //Check how to add data on JSON Server video
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...this.state.data];
                    data.push(newData);
                    this.setState({ ...this.state, data });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...this.state.data];
                    data[data.indexOf(oldData)] = newData;
                    console.log(data);
                    this.setState({ ...this.state, data });
                    // //get ID for logged in
                    // let user = localStorage.getItem("loggedInUser");
                    // let detail = JSON.parse(user);
                    // //Send update to back end
                    // fetch(`http://localhost:3000/users/${detail[0].id}`, {
                    //   headers: {
                    //     Accept: "application/json",
                    //     "Content-Type": "application/json"
                    //   },
                    //   method: "PATCH",
                    //   body: JSON.stringify({
                    //     skills: [data]
                    //   })
                    // });
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...this.state.data];
                    data.splice(data.indexOf(oldData), 1);
                    this.setState({ ...this.state, data });
                  }, 600);
                })
            }}
          />
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MySkills));
