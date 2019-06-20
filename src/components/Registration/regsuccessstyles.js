export default theme => ({
    paper: {
      padding: theme.spacing.unit * 3,
      alignItems: "center",
      textAlign: "center",
      width: 500
      
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.grey["A500"]
    },
    grid: {
      padding: theme.spacing.unit * 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
  });
  