import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

import "./Programs.css";

function Programs() {
  return (
    <div>
      <Navbar />
      <div className="programs">Programs</div>
      <div className="programs-list">
        <div className="program-time-row">
          <div className="program-title">Farm To Clinic Pilot</div>
          <div className="program-time"> June 2019 - August 2019 </div>
        </div>

        <div className="program-desc">
          A pilot 8 week Produce Rx for patients (n=30) diagnosed with a chronic
          disease received a weekly produce Rx (free of cost) via donated
          produce collected/donated by farmers at the Leroy James Farmer’s
          Market. Patients also received recipes that complimented typical
          produce grown in NC and provided in the PRx. Patients reported high
          satisfaction with the program and approximately half used the recipes
          provided.{" "}
        </div>

        <div className="partners-involved-title">
          {" "}
          Community Partners Involved{" "}
        </div>
        <div className="partners-involved">
          <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
          <img src="./images/farmersMarket.jpeg" alt="Farmers Market logo" />
        </div>

        <div className="program-2-time-row">
          <div className="program-title">Farm To Clinic Extension</div>
          <div className="program-time"> August 2019 - May 2021 </div>
        </div>
        <div className="program-desc">
          Produce collected via partnership with the Society of St. Andrew and
          the Food Bank of Central and Eastern NC connected patients with fresh
          produce directly in the waiting room of clinic sites. Over +11,000 lbs
          of fresh produce was provided to over +3,000 patients.
        </div>

        <div className="partners-involved">
          <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
          <img
            src="./images/pittcountycareclinic.jpeg"
            alt="Pitt County Clinic logo"
          />
        </div>
        <div className="partners-involved">
          <img src="./images/foodbank.jpeg" alt="Food bank logo" />
          <img src="./images/saintAndrew.jpeg" alt="Saint Andrew logo" />
        </div>

        <div className="program-3-time-row">
          <div className="program-title">HEALED Program</div>
          <div className="program-time"> June 2021 - November 2021 </div>
        </div>

        <div className="program-desc">
          Healed stands for Healthy Eating and Active Lifestyle to Enhance
          Diabetes Management. The Healed program is a 24-Week delivery Produce
          Rx program directly delivered produce to patients free of cost (n=40)
          who were diagnosed with diabetes and who received care at the
          W.A.T.C.H. Clinic. Patients were also provided nutrition and health
          education handouts and recipes. Food was donated by a local farm.
          Patient participants experienced a significant improvement in glycemic
          control, diet quality, and were highly satisfied with the program.
        </div>

        <div className="partners-involved">
          <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
        </div>

        <div className="program-4-time-row">
          <div className="program-title">Fresh Start</div>
          <div className="program-time"> 2021 - 2024 </div>
        </div>

        <div className="program-desc">
          Fresh Start is a comprehensive culinary and lifestyle medicine program
          to address chronic disease funded by The Duke Endowment with support
          from the Food Lion Corporation. The program provided free of cost to
          patients with diabetes includes 3 primary services: 1) one on one
          health coaching, 2) group classes and 3) a produce prescription (Rx).
        </div>

        <div className="program-4-links">
          <a
            href="https://docs.google.com/presentation/d/1YwmZxBhaCvUEZiPFtXkgQCGIU2zSdkpo/edit?pli=1#slide=id.p1"
            target="_blank"
            rel="noreferrer"
          >
            To learn more about theoretical framework click me!
          </a>
        </div>
        <div className="program-4-links">
          <a
            href="https://drive.google.com/file/d/1tXOvB68EOMxm_iDJCzfP8vBrGim9qWAg/view"
            target="_blank"
            rel="noreferrer"
          >
            For more info on impact click me!
          </a>
        </div>

        <div className="partners-involved">
          <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
          <img
            src="./images/albemarle.jpeg"
            alt="Albemarle Hospital Foundation logo"
          />
        </div>
        <div className="partners-involved">
          <img src="./images/foodbank.jpeg" alt="Food bank logo" />
          <img src="./images/saintAndrew.jpeg" alt="Saint Andrew logo" />
        </div>
        <div className="partners-involved">
          <img src="./images/merciClinic.png" alt="Merci Clinic logo" />
          <img src="./images/hopeClinic.jpeg" alt="Hope Clinic logo" />
        </div>
        <div className="partners-involved">
          <img
            src="./images/jamesDuke.jpeg"
            alt="James B. Duke Endowment logo"
          />
          <img src="./images/foodLion.jpeg" alt="Food Lion logo" />
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Programs;
