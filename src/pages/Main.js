import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
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

        <div>
          <Button
            variant="contained"
            href="/about"
            sx={{ m: "2", mt: "25px", fontSize: "21px" }}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
