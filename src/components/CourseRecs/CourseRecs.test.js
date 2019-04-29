import React from "react";
import { shallow } from "enzyme";
import CourseRecs from "./CourseRecs";

describe("CourseRecs", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<CourseRecs />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
