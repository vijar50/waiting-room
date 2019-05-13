import React from "react";
import { shallow } from "enzyme";
import Registration from "./Registration";

//RENDERING
describe("<Registration/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Registration />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
