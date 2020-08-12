import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import { addTask } from "../actions";

import Input from "./input";

import "./inputcontainer.css";

export const InputContainer = ({ addTask }) => {
  const input = useRef();
  const [value, setValue] = useState("");
  const onClick = () => {
    if (input.current) {
      input.current.value = "";
    }
    addTask(value);
  };
  return (
    <div className="input_container">
      <Input cb={setValue} ref={input} />
      <button onClick={onClick}>Add Task!</button>
    </div>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(InputContainer);
