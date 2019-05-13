import React from "react";
import { shallow } from "enzyme";
import MyArea from "./MyArea";

//RENDERING
describe("<MyArea/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<MyArea />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
