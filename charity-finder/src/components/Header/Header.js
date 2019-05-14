import React from "react";
import "./Header.css";
import Sticky from "@wicked_query/react-sticky";

function Header() {
  return (
    <Sticky>
      <div className="mainHeader">
        <h1>Charity Finder</h1>
      </div>
    </Sticky>
  );
}

export default Header;
