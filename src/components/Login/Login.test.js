import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

//RENDERING
describe("<Login/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Login />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
