import React from "react";
import { shallow } from "enzyme";
import Quiz from "./Quiz";

//RENDERING
describe("<Quiz/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Quiz />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
