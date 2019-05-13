import React from "react";
import { shallow } from "enzyme";
import CustTech from "./CustTech";

//RENDERING
describe("<CustTech/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CustTech />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
