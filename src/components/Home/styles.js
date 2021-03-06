export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  grid: {
    padding: theme.spacing.unit * 10,
    display: "flex",
    alignItems: "center"
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
  },
  card: {
    maxWidth: 512,
    maxHeight: 356,
    minHeight: 356
  },
  table: {
    minHeight: 50,
  },
  rating: {
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    padding: theme.spacing.unit * 6
  },
  progress: {
    // padding: theme.spacing.unit * 1,
    // display: "flex",
    // alignItems: "center"
    marginLeft: 190,
    marginTop: 40,
    marginBottom: 20
  },
});
