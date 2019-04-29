import React from "react";
import { shallow } from "enzyme";
import Quiz from "./Quiz";

describe("Quiz", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Quiz />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
