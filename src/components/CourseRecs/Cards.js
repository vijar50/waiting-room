import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link, Redirect, withRouter } from "react-router-dom";
import FormDialog from "./FormDialog";
import myStyles from "./styles";

const styles = myStyles;

class Cards extends Component {
  goToLink = () => {
    window.location = this.props.externalLink;
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              className={classes.media}
              image={this.props.imageLocation}
              title="React Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {/* Introduction to ReactJS */}
                {this.props.cardName}
              </Typography>
              <Typography variant="body2" component="p">
                {this.props.cardBody}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <FormDialog />
            {/* <Button size="small" color="secondary" >
              Book Course
            </Button> */}
            <Button
              size="small"
              color="secondary"
              component={Link}
              onClick={this.goToLink}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Cards));
