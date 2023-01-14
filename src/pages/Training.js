import React from "react";
import Navbar from "../components/Navbar";
import Subfooter from "../components/SubFooter";
import Footer from "../components/Footer";
import "./Training.css";

function Training() {
  return (
    <div>
      <Navbar />
      <div className="training">Training</div>
      <div className="under-construction">
        {" "}
        This page is under construction!
      </div>

      <Subfooter />
      <Footer />
    </div>
  );
}

export default Training;
