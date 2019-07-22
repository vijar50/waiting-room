import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialTable from 'material-table';
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";

const styles = myStyles;

class MySkills extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Type", field: "type" },
        { title: "Experience (years)", field: "experience", type: "numeric" },        
      ],
       data: []
      // data: [
      //   { name: "Javascript", type: "Front End Language", experience: 1},
      // ]
    };
    // this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    // this.getDetails();
  }

  // getDetails = () => {
  //   let user = localStorage.getItem("loggedInUser");
  //   let detail = JSON.parse(user);
  //   console.log(detail[0].skills[0])
  //   let row = detail[0].skills[0]
    
  //   this.setState({
  //     data: row
  //   })
  //   this.setState({
  //     fName: detail[0].skills.name,
  //     lName: detail[0].lName,
  //     email: detail[0].emailAddress,
  //   });
  // };

  render() {
    const { classes } = this.props;
    const {columns} = this.state
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
          let user = localStorage.getItem("loggedInUser");
          let detail = JSON.parse(user);
            // prepare your data and then call resolve like this:
            resolve({
                data: detail[0].skills, // your data array
                page: 1,// current page number
                totalCount: 10// total page number
            });
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
              this.setState({ ...this.state, data });
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
          }),
      }}
    />
      </Grid>
    </div>

    );
  }
}

export default withRouter(withStyles(styles)(MySkills));
