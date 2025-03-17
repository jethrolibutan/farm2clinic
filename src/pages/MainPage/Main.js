import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import SubFooter from "../../components/SubFooter";

import "./Main.css";

import React from "react";

function Main() {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      {/* <div className="navbar">
        <Navbar />
      </div> */}
      <div className="section-1">
        <div className="box">
          <div className="farm2clinic">We've Moved!</div>
          <div className="section-1-title-text">
            Check Us Out at Our New Website Here:
          </div>
        </div>

        <div>
          <Button
            variant="contained"
            href="https://farm2clinicwebsite.weebly.com"
            sx={{ m: "2", mt: "25px", fontSize: "21px" }}
          >
            Click Me!
          </Button>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default Main;
