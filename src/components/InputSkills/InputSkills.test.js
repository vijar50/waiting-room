import React from "react";
import { shallow } from "enzyme";
import InputSkills from "./InputSkills";

describe("ChangePwd", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<InputSkills />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
