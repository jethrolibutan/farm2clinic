import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import React from "react";

function Main() {
  return (
    <div>
      <Navbar />
      this the main page yuh
      <Link to="about"> click to view our about page</Link>
      <Link to="contact"> click to v iew our contact page</Link>
    </div>
  );
}

export default Main;
