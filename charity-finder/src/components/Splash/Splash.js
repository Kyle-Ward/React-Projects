import React from "react";
import "./Splash.css";
import field from "./field.jpg";
import Search from "../Search/Search";

function Splash() {
  return (
    <div className="splash">
      <img src={field} alt="field" className="image" />
      <div className="splashText">
        This app is here to help you find charities to support.
        <br />
        Simply enter some search criteria below to begin.
        <Search />
      </div>
    </div>
  );
}

export default Splash;
