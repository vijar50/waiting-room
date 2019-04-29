import React from "react";
import { shallow } from "enzyme";
import TopNav from "./TopNav";

describe("TopNav", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TopNav />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
