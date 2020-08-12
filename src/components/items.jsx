import React from "react";
import { connect } from "react-redux";

import { removeTask } from "../actions";

import Item from "./item";

import "./items.css";

const Items = ({ tasks, removeTask }) => {
  return (
    <div className="items">
      {tasks.map((t) => (
        <Item {...t} removeFn={removeTask} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Items);
