export default theme => ({
  paper: {
    padding: theme.spacing.unit * 4,
    alignItems: "center",
    marginTop: 50
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    padding: theme.spacing.unit * 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonContainer: {
    padding: theme.spacing.unit * 2,
    alignItems: "center",
    marginTop: 10
  },
  icon: {
    fontSize: 32
  },
  link: {
    textDecoration: "none"
  }
});
