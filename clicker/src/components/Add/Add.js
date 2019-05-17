import React from "react";
import "./Add.css";

function Add({ onAdd }) {
  return (
    <div className="add disable-select" onClick={onAdd}>
      <div className="plus">+</div>
    </div>
  );
}

export default Add;
