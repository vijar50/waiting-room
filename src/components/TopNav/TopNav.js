import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AccountBalance from "@material-ui/icons/AccountBalance";

const styles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    marginTop: 20,
    textTransform: "uppercase"
  },
  iconContainer: {
    marginRight: 10,
    marginBottom: -5
  },
  tabContainer: {
    marginLeft: 32
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto"
  }
});

class TopNav extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }

    if (this.props.currentPath === "/myarea") {
      return 1;
    }
    if (this.props.currentPath === "/register") {
      return 2;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="topNavComponent">
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                <div className={classes.inline}>
                  <Typography variant="h6" color="primary" noWrap>
                    <Link to="/home" className={classes.link}>
                      {/* Logo will go here */}
                      <AccountBalance className={classes.iconContainer} />
                      <span className={classes.tagline} id="foo">
                        Waiting Room
                      </span>
                    </Link>
                  </Typography>
                </div>
                <div className={classes.tabContainer}>
                  <Tabs
                    value={this.current() || this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                  >
                    <Tab
                      label="Home"
                      component={Link}
                      to={{ pathname: "/home" }}
                      classes={{ root: classes.tabItem }}
                    />
                    <Tab
                      label="My Area"
                      component={Link}
                      to={{ pathname: "/myarea" }}
                      classes={{ root: classes.tabItem }}
                    />
                    <Tab
                      label="Item three"
                      component={Link}
                      to={{ pathname: "/register" }}
                      classes={{ root: classes.tabItem }}
                    />
                  </Tabs>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(TopNav));
