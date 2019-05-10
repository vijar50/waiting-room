export default theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "#212121"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex"
    // flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    marginTop: 10,
    textTransform: "uppercase",
    color: "#5385d1"
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
    marginBottom: -7
  },
  logout: {
    marginLeft: 770,
    marginTop: 0
  },
  dropDownText: {
    color: "#5385d1"
  }
});
