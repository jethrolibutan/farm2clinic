import React from "react";
import Navbar from "../components/Navbar";
import { Stack, Button } from "@mui/material";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div>
      <Navbar />
      <div className="section-2"></div>
      <div className="section-2-text"> WHAT WE DO </div>

      <div className="main-content">
        <h1 className="main-content-text"> Our Mission</h1>
        <p>
          rom kitchen to classroom, the Food-based Early Education (FEEd) Lab's
          mission is to empower early childhood teachers', families, and
          communities with evidence-based strategies to improve children’s (3-5
          year) dietary quality and school readiness through early education,
          exposure, and access to healthy foods and high-quality learning
          environments.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
