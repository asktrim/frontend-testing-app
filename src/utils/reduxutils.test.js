import * as utils from "./reduxutils";

describe("Redux Utils", () => {
  test("copyState works as expected", () => {
    const arr = [1, 2, 3];
    expect(arr === utils.copyState(arr)).toBe(false);
    expect(utils.copyState(arr)).toHaveLength(3);
    expect(utils.copyState(arr)[0]).toBe(1);
    utils.copyState(arr).forEach((item, i) => {
      expect(item).toEqual(i + 1);
    });
  });

  test("indexToRemove works as expected", () => {
    const arr = [
      { id: 1, text: "Hello World" },
      { id: 2, text: "Foo Bar" },
      { id: 3, text: "Trim" },
    ];

    expect(utils.indexToRemove(arr, 2, "id")).toEqual(1);
    expect(utils.indexToRemove(arr, 3, "id")).toEqual(2);
    expect(utils.indexToRemove(arr, "foo", "id")).toEqual(-1);
  });

  test("nextId works as expected", () => {
    const arr = [1, 2, 3];
    expect(utils.nextId(arr)).toEqual(4);
  });
});
