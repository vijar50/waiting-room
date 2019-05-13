import React from "react";
import { shallow } from "enzyme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";

//RENDERING
describe("<App/> - rendering", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should contain a <MuiThemeProvider/>", () => {
    expect(wrapper.find(MuiThemeProvider).length).toEqual(1);
  });
});
//INTERACTIONS

//LIFECYCLE METHOD INVOCATIONS
