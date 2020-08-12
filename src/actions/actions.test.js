import * as actions from "./index";

describe("Redux actions", () => {
  test("removeTask", () => {
    expect(actions.removeTask(1)).toEqual({
      type: "REMOVE_ITEM",
      id: 1,
    });
  });
  test("addTask", () => {
    expect(actions.addTask("hello world")).toEqual({
      type: "ADD_ITEM",
      task: "hello world",
    });
  });
});
