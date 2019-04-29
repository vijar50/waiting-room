import React from "react";
import { shallow } from "enzyme";
import CustTech from "./CustTech";

describe("CustTech", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CustTech />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
