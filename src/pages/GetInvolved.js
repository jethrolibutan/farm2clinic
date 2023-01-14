import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import "./GetInvolved.css";

function GetInvolved() {
  return (
    <div>
      <Navbar />
      <div className="get-involved">Get Involved</div>

      <div claassName="get-involved-container">
        <div className="follow-us-section">
          {" "}
          <div className="follow-us-title">Follow us on social media!</div>
          <div className="rows">
            {" "}
            <div>
              {" "}
              <img src="" />
            </div>{" "}
            <div> section 2 </div>
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default GetInvolved;
