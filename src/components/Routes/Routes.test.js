import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Routes from "./Routes";

//RENDERING
describe("<Routes/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Routes />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render 10 Routes", () => {
    expect(wrapper.find(Route).length).toEqual(10);
  });
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
