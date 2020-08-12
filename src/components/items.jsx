import React from "react";
import { connect } from "react-redux";

import { removeTask } from "../actions";

import Item from "./item";

import "./items.css";

export const Items = ({ tasks, removeTask }) => {
  return (
    <div className="items">
      {tasks.map((t, i) => (
        <Item {...t} removeFn={removeTask} key={`task-${i}`} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  };
};

const mapDispatchToProps = {
  removeTask,
};

Items.defaultProps = {
  tasks: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
