import React from "react";
import { shallow } from "enzyme";
import MySkills from "./MySkills";

//RENDERING
describe("<MySkills/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<MySkills />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
