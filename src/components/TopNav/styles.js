export default theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `4px solid #5385d1`,
    backgroundColor: "#212121"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex"
    // flexGrow: 1
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    marginTop: 15,
    textTransform: "uppercase",
    color: "#5385d1",
    textDecoration: "none"
  },
  button: {
    width: 200,
    height: 50,
    fontSize: 18,
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: -6,
    color: "#5385d1"
  },
  lbutton: {
    marginTop: -5,
    marginLeft: 100,
    color: "#5385d1"
  },
  infoSection: {
    display: "flex",
     marginLeft: 85
  },
  iconContainer: {
    marginRight: 10,
    marginBottom: -5
  },
  tabContainer: {
    marginLeft: 32,
    marginTop: 8
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
    color: "white"
  },
  logoutText: {
    display: "inline-block",
    marginLeft: 10,
    marginTop: 17,
    textTransform: "uppercase"
  },
  logoutIconContainer: {
    marginRight: 10,
    marginTop: -3
  },
  logout: {
    marginLeft: 770,
    marginTop: 0
  },
  dropDownText: {
    color: "#5385d1"
  },
  user: {
    marginRight: 10,
    textTransform: "uppercase",
    fontSize: 18,
    marginTop: -2,
    fontWeight: 500
  },
  buttonGrid: {
    marginLeft: 223
  }
});
