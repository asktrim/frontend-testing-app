import React from "react";
import { shallow } from "enzyme";
import { Input } from "./input";

describe("<Input />", () => {
  const cb = jest.fn();
  const comp = shallow(<Input cb={cb} />);

  test("renders", () => {
    expect(comp).toExist();
  });

  test("onChange works as expected", () => {
    comp.props().onChange({ target: { value: "hello world" } });
    expect(cb).toHaveBeenCalledWith("hello world");
  });
});
