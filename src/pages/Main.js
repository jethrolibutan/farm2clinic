import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "./Main.css";

import React from "react";

function Main() {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="section-1">
        <div className="section-1-title">farm2clinic</div>
      </div>
    </div>
  );
}

export default Main;
