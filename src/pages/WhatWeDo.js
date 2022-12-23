import React from "react";
import Navbar from "../components/Navbar";
import { Stack, Button } from "@mui/material";
import Footer from "../components/Footer";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div>
      <Navbar />
      <div className="section-2"></div>
      <div className="section-2-text"> WHAT WE DO </div>

      <div className="main-content">
        <h1 className="our-mission-title"> Our Mission </h1>
        <div className="rows">
          <div className="our-mission-text">
            <p>
              The mission of F2C (Farm 2 Clinic) is to connect nutritious, local
              food and nutrition education resources to patients to promote a
              healthy lifestyle and optimize their quality of life while
              reducing food waste.
            </p>
          </div>
          <img src="../images/farm2ClinicLogo.png" className="logo-image"></img>
        </div>
      </div>

      <div className="main-content">
        <div className="our-work-section">
          <h1 className="our-work-title"> Our Work </h1>
          <p className="our-work-text">
            The mission of F2C (Farm 2 Clinic) is to connect nutritious, local
            food and nutrition education resources to patients to promote a
            healthy lifestyle and optimize their quality of life while reducing
            food waste.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhatWeDo;
