import React from "react";
import "./Reset.css";

const Reset = ({ onReset }) => {
  return (
    <div className="reset disable-select" onClick={onReset}>
      <div className="ex">x</div>
    </div>
  );
}

export default Reset;
