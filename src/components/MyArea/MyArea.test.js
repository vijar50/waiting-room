import React from "react";
import { shallow } from "enzyme";
import MyArea from "./MyArea";

describe("MyArea", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<MyArea />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
