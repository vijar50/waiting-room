import React from "react";
import { shallow } from "enzyme";
import ScheduleReminder from "./ScheduleReminder";

//RENDERING
describe("<ScheduleReminder/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ScheduleReminder />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
