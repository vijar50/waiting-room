import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, blueGrey } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

//Global theme colors
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: blue[400]
    },
    primary: {
      main: blueGrey[700]
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {/* React Routing will go here */}
          <Typography color="primary" variant="h1">
            Hello World
          </Typography>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
