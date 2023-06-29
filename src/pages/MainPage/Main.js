import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@mui/material";
import SubFooter from "../../components/SubFooter";

import "./Main.css";

import React from "react";

function Main() {
  return (
    <div style={{ height: window.innerHeight, width: window.innerWidth }}>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="section-1">
        <div className="box">
          <div className="farm2clinic">FARM 2 CLINIC</div>
          <div className="section-1-title-text">
            {" "}
            Adressing health and social barriers to nutrition and health{" "}
          </div>
        </div>

        <div>
          <Button
            variant="contained"
            href="/whatWeDo"
            sx={{ m: "2", mt: "25px", fontSize: "21px" }}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default Main;
