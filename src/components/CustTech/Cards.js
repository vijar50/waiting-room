import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link, Redirect, withRouter } from "react-router-dom";

import myStyles from "./styles";

const styles = myStyles;

class Cards extends Component {
  goToLink = () => {
    window.open(this.props.externalLink);
  };
  render() {
    const { classes, projects, technologies } = this.props;

    return (
      <React.Fragment>
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
              <Typography gutterBottom variant="h5" color="secondary">
                {this.props.cardName}
              </Typography>
              <Typography variant="body2">
                {this.props.cardDescription}
              </Typography>
              <p />
              <Typography variant="body2" color="secondary">
                Employees
              </Typography>
              <Typography variant="body2">{this.props.employees}</Typography>
              <p />
              <Typography variant="body2" color="secondary">
                Address
              </Typography>
              <Typography variant="body2">{this.props.address}</Typography>
              <p />
              <Typography variant="body2" color="secondary">
                Projects
              </Typography>
              <List disablePadding="true">
                {projects.map(project => (
                  <ListItem disableGutters="true" dense="true">
                    <ListItemText primary={project} />
                  </ListItem>
                ))}
              </List>
              <p/>
              <Typography variant="body2" color="secondary">
                Technologies
              </Typography>
              <List disablePadding="true">
                {technologies.map(project => (
                  <ListItem disableGutters="true" dense="true">
                    <ListItemText primary={project} />
                  </ListItem>
                ))}
              </List>        
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary" onClick={this.goToLink} id={this.props.cardName} url={this.props.externalLink}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Cards));
