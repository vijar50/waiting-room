import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { Link, withRouter } from "react-router-dom";
import myStyles from "./styles";

const styles = myStyles;

class QuizCard extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      setPage: 0,
      rowsPerPage: 3,
      setRowsPerPage: 3
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({
      setPage: newPage
    });
  };

  render() {
    const { classes } = this.props;
    let date = new Date();
    let formattedDate =
      date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    let score = 4;

    return (
      <React.Fragment>
        <CssBaseline />
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" color="secondary">
                Quiz Results
              </Typography>
              <Typography variant="body1">
                In the last quiz you completed on {formattedDate} on you scored:
              </Typography>
              <Grid container className={classes.rating}>
                <Grid item md={12}>
                  <Typography variant="h2" color="secondary">{score}</Typography>
                </Grid>
                <Grid item md={12}>
                  <Rating value={score} readOnly size="large" max={7}/>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              component={Link}
              to={{ pathname: "/quiz" }}
            >
              Go to Quizzes
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(QuizCard));
