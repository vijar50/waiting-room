import React from "react";
import { shallow } from "enzyme";
import TopNav from "./TopNav";

//RENDERING
describe("<TopNav/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TopNav />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
