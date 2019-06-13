import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "./PageNotFound";

//RENDERING
describe("<PageNotFound/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<PageNotFound />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});

//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
