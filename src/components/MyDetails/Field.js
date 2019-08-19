import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import TopNav from "../TopNav/TopNav";
import myStyles from "./styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";

const styles = myStyles;

class MyDetails extends Component {
  render() {
    const {
      classes,
      title,
      id,
      value,
      disabled,
      handleCh,
      handleEd,
      edit
    } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Typography variant="subtitle1">{title}</Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl className={classes.textField}>
            <Input
              id={id}
              value={value}
              disabled={disabled}
              onChange={handleCh}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleEd}>
                    {edit ? <Save /> : <Edit />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(MyDetails));
