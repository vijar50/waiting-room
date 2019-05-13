import React from "react";
import { shallow } from "enzyme";
import MyDetails from "./MyDetails";

//RENDERING
describe("<MyDetails/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<MyDetails />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
