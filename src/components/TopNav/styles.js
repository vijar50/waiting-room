export default theme => ({
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
    display: "flex",
    flexGrow: 1
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
  logoutText: {
    display: "inline-block",
    marginLeft: 10,
    marginTop: 25,
    textTransform: "uppercase"
  },
  iconContainer: {
    marginRight: 10,
    marginBottom: -5
  },
  logoutIconContainer: {
    marginRight: 10,
    marginBottom: -7
  },
  tabContainer: {
    marginLeft: 32
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto"
  },
  logout: {
    marginLeft: 770,
    marginTop: 5,
    color: "black"
  }
});
