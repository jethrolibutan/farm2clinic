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
        <div className="section-1-title">FARM 2 CLINC</div>
        <div className="section-1-title-text">
          {" "}
          Adressing health and social barriers to nutrition and health{" "}
        </div>
      </div>

      <div> Our Mission</div>
    </div>
  );
}

export default Main;
