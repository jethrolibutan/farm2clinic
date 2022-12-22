import React from "react";
import Navbar from "../components/Navbar";

import "./MeetTheTeam.css";

function MeetTheTeam() {
  return (
    <div className="cards-list">
      <Navbar />
      <div className="exec-container">
        <h1 className="meet-the-team-title">Meet The Team</h1>

        <div className="rows">
          <div className="director">
            <img src="../images/sastre.png" className="director-img"></img>
          </div>
        </div>

        <img src="../images/sastre.png"></img>
      </div>
    </div>
  );
}

export default MeetTheTeam;
