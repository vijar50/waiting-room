import React from "react";
import { shallow } from "enzyme";
import ChangePwd from "./ChangePwd";

describe("ChangePwd", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ChangePwd />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
