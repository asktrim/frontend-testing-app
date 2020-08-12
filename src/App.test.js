import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import InputContainer from "./components/inputcontainer";
import Items from "./components/items";

describe("<App />", () => {
  test("It renders", () => {
    const app = shallow(<App />);
    expect(app.find(InputContainer)).toExist();
    expect(app.find(Items)).toExist();
  });
});
