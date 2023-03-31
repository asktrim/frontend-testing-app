import React from "react";
import { shallow } from "enzyme";
import { Item } from "./item";

describe("<Item />", () => {
  const task = "hello world";
  const removeFn = jest.fn();
  const id = 1;
  const comp = shallow(<Item task={task} removeFn={removeFn} id={id} />);
  test("Renders", () => {
    expect(comp).toExist();
  });
  test("Works as expected", () => {
    expect(comp.find(".item-body")).toExist();
    expect(comp.find(".item-body").text()).toEqual(task);
    comp.find(".item-x").simulate("click");
    expect(removeFn).toHaveBeenCalledWith(1);
  });
});
