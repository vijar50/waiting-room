<Grid container spacing={16}>
 <Grid container xs={6}>
  <Grid item xs={3}>
   <Person color="secondary" className={classes.icon} />
  </Grid>
  <Grid item xs={3}>
   <Typography color="secondary" variant="h6">
    Username
                  </Typography>
  </Grid>
 </Grid>
 <Grid item xs={6}>
  <TextField
   id="username"
   value={this.props.userName}
   //Get onEnterUserName from LoginContainer.js
   onChange={this.props.onEnterUserName}
  />
 </Grid>
</Grid>
 <Grid container spacing={16}>
  <Grid container xs={6}>
   <Grid item xs={3}>
    <Key color="secondary" className={classes.icon} />
   </Grid>
   <Grid item xs={3}>
    <Typography color="secondary" variant="h6">
     Password
                  </Typography>
   </Grid>
  </Grid>
  <Grid item xs={6}>
   <TextField
    id="password"
    type="password"
    value={this.props.password}
    //Get onEnterPassword from LoginContainer.js
    onChange={this.props.onEnterPassword}
   />
  </Grid>
 </Grid>