import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import Home from "../Home/Home";
import RegistrationContainer from "../Registration/RegistrationContainer";
import CustTech from "../CustTech/CustTech";
import CourseRecs from "../CourseRecs/CourseRecs";
import Quiz from "../Quiz/Quiz";
import MyDetailsContainer from "../MyDetails/MyDetailsContainer"
import MySkills from "../MySkills/MySkills";
import ScheduleReminder from "../ScheduleReminder/ScheduleReminder";
import PageNotFound from "../PageNotFound/PageNotFound";
import RegistrationSuccess from "../Registration/RegistrationSuccess";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      {/* Update routes - Create Container.js to point to actual component */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={RegistrationContainer} />
      <Route exact path="/customertech" component={CustTech} />
      <Route exact path="/courserecs" component={CourseRecs} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/mydetails" component={MyDetailsContainer} />
      <Route exact path="/myskills" component={MySkills} />
      <Route exact path="/schedulereminder" component={ScheduleReminder} />
      <Route exact path="/registrationsuccess" component={RegistrationSuccess} />
      <Route component={PageNotFound} />
    </Switch>
  </HashRouter>
);
