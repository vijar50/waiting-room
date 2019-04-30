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
import LogOut from "@material-ui/icons/ExitToApp";
import classNames from "classnames";
import myStyles from "./styles";

const styles = myStyles;

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
    if (this.props.currentPath === "/customertech") {
      return 2;
    }
    if (this.props.currentPath === "/courserecs") {
      return 3;
    }
    if (this.props.currentPath === "/quiz") {
      return 4;
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
                  {/* Navigation Links */}
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
                      label="Customer Technologies"
                      component={Link}
                      to={{ pathname: "/customertech" }}
                      classes={{ root: classes.tabItem }}
                    />
                    <Tab
                      label="Course Recommendations"
                      component={Link}
                      to={{ pathname: "/courserecs" }}
                      classes={{ root: classes.tabItem }}
                    />
                    <Tab
                      label="Quiz"
                      component={Link}
                      to={{ pathname: "/quiz" }}
                      classes={{ root: classes.tabItem }}
                    />
                  </Tabs>
                </div>
                <div>
                  <Link
                    to="/"
                    className={classNames(classes.link, classes.logout)}
                  >
                    <LogOut
                      color="primary"
                      className={classes.logoutIconContainer}
                    />
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      className={classes.logoutText}
                    >
                      Logout
                    </Typography>
                  </Link>
                </div>
                {/* Logout Button */}
                {/* <div>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    className={classes.logout}
                    noWrap
                  >
                    <Link to="/" className={classes.link}>
                      <LogOut
                        color="primary"
                        className={classes.iconContainer}
                      />
                      <span className={classes.tagline}>Logout</span>
                    </Link>
                  </Typography>
                </div> */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(TopNav));
