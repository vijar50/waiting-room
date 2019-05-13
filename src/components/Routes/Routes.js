import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Registration from "../Registration/Registration";
import MyArea from "../MyArea/MyArea";
import CustTech from "../CustTech/CustTech";
import CourseRecs from "../CourseRecs/CourseRecs";
import Quiz from "../Quiz/Quiz";
import MyDetails from "../MyDetails/MyDetails";
import MySkills from "../MySkills/MySkills";
import ScheduleReminder from "../ScheduleReminder/ScheduleReminder";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/myarea" component={MyArea} />
      <Route exact path="/customertech" component={CustTech} />
      <Route exact path="/courserecs" component={CourseRecs} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/mydetails" component={MyDetails} />
      <Route exact path="/myskills" component={MySkills} />
      <Route exact path="/schedulereminder" component={ScheduleReminder} />
    </Switch>
  </HashRouter>
);
