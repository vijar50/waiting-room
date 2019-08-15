import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AccountBalance from "@material-ui/icons/AccountBalance";
import myStyles from "./styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

const styles = myStyles;

class TopNav extends Component {
  state = {
    open: false,
    openAccount: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleToggleAccount = () => {
    this.setState(state => ({ openAccount: !state.openAccount }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleCloseAccount = event => {
    if (this.anchorEll.contains(event.target)) {
      return;
    }

    this.setState({ openAccount: false });
  };

  render() {
    const { classes } = this.props;
    const { open, openAccount, anchorEl, anchorEll } = this.state;
    //retrieve current user
    const user = localStorage.getItem("currentUser");

    return (
      <div className="topNavComponent">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container alignItems="baseline">
              <Grid item xs={2} id="siteLogo">
                <Typography
                  variant="h5"
                  color="secondary"
                  component={Link}
                  to={{ pathname: "/home" }}
                  className={classes.tagline}
                >
                  <AccountBalance className={classes.iconContainer} />
                  Waiting Room
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.buttonGrid}>
                <ButtonBase
                  id="homeButton"
                  component={Link}
                  to={{ pathname: "/home" }}
                  className={classes.button}
                >
                  Home
                </ButtonBase>
                <ButtonBase
                  id="technologiesButton"
                  component={Link}
                  to={{ pathname: "/customertech" }}
                  className={classes.button}
                >
                  Technologies
                </ButtonBase>
                <ButtonBase
                  id="coursesButton"
                  component={Link}
                  to={{ pathname: "/courserecs" }}
                  className={classes.button}
                >
                  Courses
                </ButtonBase>
                <ButtonBase
                  id="quizButton"
                  component={Link}
                  to={{ pathname: "/quiz" }}
                  className={classes.button}
                >
                  Quiz
                </ButtonBase>
              </Grid>
              <Grid item xs={1} className={classes.infoSection}>
                <Typography
                  id="loggedInAs"
                  color="secondary"
                  className={classes.user}
                >
                  {user}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  id="accountButton"
                  buttonRef={node => {
                    this.anchorEll = node;
                  }}
                  aria-owns={openAccount ? "menu-list-grow2" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleToggleAccount}
                  className={classes.lbutton}
                >
                  <AccountCircle style={{ fontSize: 34 }} />
                </IconButton>
                <Popper
                  open={openAccount}
                  anchorEl={this.anchorEll}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      id="menu-list-grow2"
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom"
                      }}
                    >
                      <Paper>
                        <ClickAwayListener
                          onClickAway={this.handleCloseAccount}
                        >
                          <MenuList>
                            <MenuItem
                              id="profileLink"
                              onClick={this.handleCloseAccount}
                              component={Link}
                              to={{ pathname: "/mydetails" }}
                              className={classes.dropDownText}
                            >
                              Profile
                            </MenuItem>
                            <MenuItem
                              id="skillsLink"
                              onClick={this.handleCloseAccount}
                              component={Link}
                              to={{ pathname: "/myskills" }}
                              className={classes.dropDownText}
                            >
                              Skills
                            </MenuItem>
                            <MenuItem
                              id="bookingsLink"
                              onClick={this.handleCloseAccount}
                              component={Link}
                              to={{ pathname: "/mybookings" }}
                              className={classes.dropDownText}
                            >
                              Bookings
                            </MenuItem>
                            <MenuItem
                              id="logoutLink"
                              onClick={this.handleCloseAccount}
                              component={Link}
                              to={{ pathname: "/" }}
                              className={classes.dropDownText}
                            >
                              Logout
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(TopNav));
