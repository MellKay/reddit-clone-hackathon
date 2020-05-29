import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "../Navbar";
import Dash from "../Dash";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Dash />
      </div>
    </>
  );
}

export default App;
