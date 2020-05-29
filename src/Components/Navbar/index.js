import React from "react";
import "./nav.css";

function NavBar() {
  return (
    <div className="nav">
      <h2 className="title">Not Reddit</h2>
      <img
        src="https://www.logo.wine/a/logo/Reddit/Reddit-Logomark-Color-Logo.wine.svg"
        alt="logo"
        className="logo"
      />
      <input className="searchBar" placeholder="search" />
    </div>
  );
}

export default NavBar;
