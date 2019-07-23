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
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Type", field: "type" },
        { title: "Experience (years)", field: "experience", type: "numeric" }
      ],
      data: []
    };
  }

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
        localStorage.setItem("detail", JSON.stringify(myJson[0].skills));
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
        skills: data
      })
    });
  };

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
            title=""
            columns={columns}
            data={query =>
              new Promise((resolve, reject) => {
                this.getBackend()
                //Convert string from getBackend() to parseable format
                let str = localStorage.getItem("detail");
                console.log("Load Data: " + str);
                // prepare your data and then call resolve like this:
                resolve({
                  data: JSON.parse(str), // your data array
                  page: 1, // current page number
                  totalCount: 10 // total page number
                });
                //Update state
                this.setState({
                  data: JSON.parse(str)
                });
              })
            }
            editable={{
              //Check how to add data on JSON Server video
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    //Add item to state
                    resolve();
                    let data = [...this.state.data];
                    console.log(data);
                    data.push(newData);
                    console.log(data);
                    this.setState({ ...this.state, data });
                    //Send update to back end
                    this.updateBackEnd(data);
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    console.log(`Old Data ${JSON.stringify(oldData)}`);
                    console.log(`New Data ${JSON.stringify(newData)}`);
                    let data = [...this.state.data];
                    //find array index of changed item and update
                    for (var i = 0; i < data.length; i++) {
                      if (data[i].id === newData.id) {
                        data[i] = newData;
                        break;
                      }
                    }
                    console.log("Final: " + JSON.stringify(data));
                    this.setState({ ...this.state, data });
                    //Send update to back end
                    this.updateBackEnd(data);
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    let data = [...this.state.data];
                    data.splice(data.indexOf(oldData), 1);
                    console.log("tbdData: " + data);
                    this.setState({ ...this.state, data });
                    //Send update to back end
                    this.updateBackEnd(data);
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
