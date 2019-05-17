import React from "react";
import "./Splash.css";
import Search from "../Search/Search";

function Splash({ onSearchChange, onSearchSubmit }) {
  return (
    <div className="splash">
      <div className="splashText">
        This app is here to help you find charities to support.
        <br />
        <br />
        Simply choose what to search for from the dropdown menu,
        <br />
        then enter some search criteria below to begin.
        <Search onSearchChange={onSearchChange} onSearchSubmit={onSearchSubmit} />
      </div>
    </div>
  );
}

export default Splash;
