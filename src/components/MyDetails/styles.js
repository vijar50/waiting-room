export default theme => ({
  paper: {
    padding: theme.spacing.unit * 4
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
  header: {
    padding: theme.spacing.unit * 4
  },
  textField: {
    width: 275,
    marginLeft: theme.spacing.unit * 4
  },
  textLabel: {
    marginRight: -30
  },
  fieldContainer: {
    padding: theme.spacing.unit * 1,
    alignItems: "center"
  },
  subheading: {
    marginTop: 20
  },
  edit: {
    fontSize: 24
  }
});
