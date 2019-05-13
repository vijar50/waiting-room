import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AccountBalance from "@material-ui/icons/AccountBalance";
import LogOut from "@material-ui/icons/ExitToApp";
import classNames from "classnames";
import myStyles from "./styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = myStyles;

class TopNav extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className="topNavComponent">
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                <div className={classes.inline}>
                  <Typography variant="h6" color="secondary" noWrap>
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
                  <Button
                    color="secondary"
                    component={Link}
                    to={{ pathname: "/home" }}
                  >
                    Home
                  </Button>
                  <Button
                    buttonRef={node => {
                      this.anchorEl = node;
                    }}
                    aria-owns={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleToggle}
                    color="secondary"
                  >
                    My Area
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom"
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={this.handleClose}>
                            <MenuList>
                              <MenuItem
                                onClick={this.handleClose}
                                component={Link}
                                to={{ pathname: "/mydetails" }}
                                className={classes.dropDownText}
                              >
                                My Details
                              </MenuItem>
                              <MenuItem
                                onClick={this.handleClose}
                                component={Link}
                                to={{ pathname: "/myskills" }}
                                className={classes.dropDownText}
                              >
                                My Skills
                              </MenuItem>
                              <MenuItem
                                onClick={this.handleClose}
                                component={Link}
                                to={{ pathname: "/schedulereminder" }}
                                className={classes.dropDownText}
                              >
                                Schedule Reminder
                              </MenuItem>
                              <MenuItem
                                onClick={this.handleClose}
                                component={Link}
                                to={{ pathname: "/customertech" }}
                                className={classes.dropDownText}
                              >
                                View Skills (Manager)
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Button
                    color="secondary"
                    component={Link}
                    to={{ pathname: "/customertech" }}
                  >
                    Customer Technologies
                  </Button>
                  <Button
                    color="secondary"
                    component={Link}
                    to={{ pathname: "/courserecs" }}
                  >
                    Course Recommendations
                  </Button>
                  <Button
                    color="secondary"
                    component={Link}
                    to={{ pathname: "/quiz" }}
                  >
                    Quiz
                  </Button>
                </div>
                <div>
                  <Link
                    to="/"
                    className={classNames(classes.link, classes.logout)}
                  >
                    <LogOut
                      color="secondary"
                      className={classes.logoutIconContainer}
                    />
                    <Typography
                      variant="subtitle2"
                      color="secondary"
                      className={classes.logoutText}
                    >
                      Logout
                    </Typography>
                  </Link>
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
