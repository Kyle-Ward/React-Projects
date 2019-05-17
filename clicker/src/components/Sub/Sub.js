import React from "react";
import "./Sub.css";

function Sub({ onSub }) {
  return (
    <div className="sub disable-select" onClick={onSub}>
      <div className="minus">-</div>
    </div>
  );
}

export default Sub;
