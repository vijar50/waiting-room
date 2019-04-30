export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  cardHeader: {
    textTransform: "uppercase"
  },
  cardContentBox: {
    marginBottom: 40,
    height: 65
  },
  cardButtonBox: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    width: 150
  }
});
