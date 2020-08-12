import React, { useState } from "react";
import { shallow } from "enzyme";
import { InputContainer } from "./inputcontainer";
import Input from "./input";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("<InputContainer />", () => {
  const setState = jest.fn();
  const addTask = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  const realUseState = useState;
  const stubState = "hello World";
  useStateSpy.mockImplementation((init) => [init, setState]);
  const comp = shallow(<InputContainer addTask={addTask} />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("call back sets value", () => {
    comp.find(Input).props().cb("hello world");
    expect(setState).toHaveBeenCalledWith("hello world");

    comp.find("button").simulate("click");
    expect(addTask).toHaveBeenCalled();
  });
});
