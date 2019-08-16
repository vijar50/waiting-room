export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  header: {
    padding: theme.spacing.unit * 4
  },
  grid: {
    padding: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "row"
  },
  card: {
    maxWidth: 420,
    // maxHeight: 412,
    marginLeft: 121
  },
  media: {
    height: 180
  }
});
