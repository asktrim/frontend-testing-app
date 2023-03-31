import React from "react";
import { shallow } from "enzyme";

import { Items } from "./items";
import Item from "./item";

describe("<Items />", () => {
  const removeTask = jest.fn();
  const comp = shallow(<Items removeTask={removeTask} />);

  test("renders without tasks", () => {
    expect(comp).toExist();
    expect(comp.find(Item)).toHaveLength(0);
  });

  test("renders with tasks", () => {
    const tasks = [
      { id: 1, task: "hello world" },
      { id: 2, task: "foo bar" },
      { id: 3, task: "trim" },
    ];
    comp.setProps({ tasks });

    expect(comp).toExist();
    expect(comp.find(Item)).toHaveLength(3);

    expect(comp.find(Item).first().props().task).toEqual("hello world");
    comp.find(Item).last().props().removeFn();
    expect(removeTask).toHaveBeenCalled();
  });
});
