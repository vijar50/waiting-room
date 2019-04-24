import React from "react";
import { shallow } from "enzyme";
import Registration from "./Registration";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Registration />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
