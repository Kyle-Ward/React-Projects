import React from "react";
import "./Splash.css";
import field from "./field.jpg";

function Splash() {
  return (
    <div className="splash">
      <img src={field} alt="field" className="image" />
      <div className="splashText">Splash Text!</div>
    </div>
  )
}

export default Splash;
