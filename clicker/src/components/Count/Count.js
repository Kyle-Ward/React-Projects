import React from "react";
import "./Count.css";

const Count = ({ counter }) => {
  return (
    <div>
      <div className="title">React Click Counter</div>
      <div className="count">{counter}</div>
    </div>
  );
}

export default Count;
