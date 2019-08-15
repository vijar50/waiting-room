import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link, Redirect, withRouter } from "react-router-dom";
import myStyles from "./styles";

const styles = myStyles;

class CourseCard extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      setPage: 0,
      rowsPerPage: 3,
      setRowsPerPage: 3,
      courses: null,
      loading: true
    };
  }

  componentDidMount = async () => {
    await setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      2000
    );
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      setPage: newPage
    });
  };

  render() {
    const { classes, courses } = this.props;
    const { loading } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" color="secondary">
                My Courses
              </Typography>
              <Typography variant="body1">
                You are attending the following courses:
              </Typography>

              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell align="right">Course Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading ? (
                    courses.map(booking => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {booking.courseName}
                        </TableCell>
                        <TableCell align="right">
                          {booking.formattedBookingDate}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <CircularProgress
                      className={classes.progress}
                      color="secondary"
                      size={80}
                    />
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              component={Link}
              to={{ pathname: "/courserecs" }}
            >
              Edit Bookings
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(CourseCard));
