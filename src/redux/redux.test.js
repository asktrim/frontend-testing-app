import tasksReducer from "./tasksreducer";

describe("tasksReducer", () => {
  test("Returns original state", () => {
    expect(tasksReducer()).toEqual({ tasks: [] });
    expect(tasksReducer(undefined, { type: "FOO" })).toEqual({ tasks: [] });
  });

  test("Returns a new state from REMOVE_ITEM", () => {
    const initialState = {
      tasks: [
        { id: 1, task: "Hello World" },
        { id: 2, task: "Foo Bar" },
      ],
    };
    expect(tasksReducer(initialState, { type: "REMOVE_ITEM", id: 1 })).toEqual({
      tasks: [{ id: 2, task: "Foo Bar" }],
    });

    expect(tasksReducer(initialState, { type: "REMOVE_ITEM", id: 3 })).toEqual(
      initialState
    );
  });

  test("Returns a new state from ADD_ITEM", () => {
    const initialState = {
      tasks: [
        { id: 1, task: "Hello World" },
        { id: 2, task: "Foo Bar" },
      ],
    };
    expect(
      tasksReducer(initialState, { type: "ADD_ITEM", task: "Work" })
    ).toEqual({
      tasks: [
        { id: 1, task: "Hello World" },
        { id: 2, task: "Foo Bar" },
        { id: 3, task: "Work" },
      ],
    });
  });
});
