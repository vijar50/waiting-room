import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Routes from "../Routes/Routes";

//Global theme colors
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: "#5385d1"
    },
    primary: {
      main: grey[50]
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          {/* React Routing */}
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
