import React from "react";
import "./Search.css";

function Search({ onSearchChange, onSearchSubmit }) {
  return (
    <div className="search">
        <select className="select">
          <option defaultValue>Please Choose a Search Option</option>
          <option value="name">Charity's Name</option>
          <option value="home">Charity's Home Country</option>
          <option value="serves">Charity's Served Countries</option>
        </select>
        <input className="searchbar" type="text" onChange={onSearchChange} />
        <br />
        <input className="submit" type="submit" value="Find a charity" onClick={onSearchSubmit} />
    </div>
  );
}

export default Search;
