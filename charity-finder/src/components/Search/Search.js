import React from 'react';
import "./Search.css";

function Search() {
  return (
    <div>
      <form>
        <input className="searchbar" type="text" />
        <br />
        <input className="submit" type="submit" value="Find a charity" />
      </form>
    </div>
  )
}

export default Search;