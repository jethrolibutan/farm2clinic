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

      <div className="getting-involved-container">
        <div className="getting-involved-intro">
          If you want to get involved with Farm2Clinic, keep reading!
        </div>

        <div className="getting-involved-community">
          <div className="getting-involved-list">
            <h1 className="community-title">
              {" "}
              Community members can get involved by:{" "}
            </h1>

            <p className="community-involvement-section">
              <ul className="community-involvement">
                <li>
                  Attend a gleaning and support the harvesting and collection of
                  healthful food that goes to the patients.{" "}
                </li>
                <li>Assist with loading/unloading the mobile unit. </li>
                <li>
                  Assist with interpreting (Spanish) at classes, enrollment
                  visits, and/or translation.{" "}
                </li>
                <li>
                  See the{" "}
                  <a
                    href="https://farm2clinic.com/donate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    donate page
                  </a>{" "}
                  - for other direct ways to support!{" "}
                </li>
              </ul>
            </p>

            <h1 className="student-title"> Students can get involved by: </h1>

            <p className="student-involvement-section">
              <ul className="student-involvement">
                <li>
                  Train as a student health coach to gain 1 on 1 experience
                  providing patient education and counseling and accumulate
                  patient contact hours- can be done on a volunteer basis or for
                  course/internship credits. <br></br>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScDx0j0OyllyJy0DRkHduQMKqyw2AUo0c1xxYJRIOevEKuUgA/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click on me to apply!
                  </a>
                </li>
                <li>
                  {" "}
                  Research Experience (Apply for an URCA to support you to work
                  with us for a Signature Honors Project, or capstone/Thesis
                  project). <br />
                  <a
                    href="https://rede.ecu.edu/undergraduate/undergraduate-research-and-creative-activity-awards/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Click on me to apply for an UCRA to support you to work with
                    us!
                  </a>{" "}
                </li>
                <li>
                  Gain experience delivering the on-site group classes with
                  nutrition and health education, physical activity
                  demonstrations as well as healthy cooking demonstrations- can
                  be done as a volunteer basis or for course/internship credits.{" "}
                  <br />
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScDx0j0OyllyJy0DRkHduQMKqyw2AUo0c1xxYJRIOevEKuUgA/viewform"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Click on me to apply!
                  </a>{" "}
                </li>
                <li>
                  **Student volunteers are typically given preference for
                  potential paid assistantship positions (undergraduate and/or
                  graduate positions).
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default GetInvolved;
