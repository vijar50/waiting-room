import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

//RENDERING
describe("<Home/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Home />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
