export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"]
  },
  header: {
    padding: theme.spacing.unit * 4
  },
  paper: {
    padding: theme.spacing.unit * 4,
  },
  grid: {    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
