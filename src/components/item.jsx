import React from "react";
import "./item.css";

const Item = ({ task, removeFn, id }) => {
  const onXClick = () => removeFn(id);
  return (
    <div className="item">
      <div className="item-body">{task}</div>
      <span className="item-x" onClick={onXClick}>
        +
      </span>
    </div>
  );
};

export default Item;
