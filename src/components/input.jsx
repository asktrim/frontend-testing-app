import React from "react";
import "./input.css";

export const Input = React.forwardRef(({ cb }, ref) => {
  const onChange = (e) => cb(e.target.value);
  return <input onChange={onChange} ref={ref} />;
});

export default Input;
