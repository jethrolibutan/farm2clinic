import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div>
      <Navbar />
      <div className="section-2">
        <div className="section-2-text"> WHAT WE DO </div>
      </div>

      <div className="main-content">
        <h1 className="our-mission-title"> Our Mission </h1>
        <div className="rows">
          <div className="our-mission-text">
            <p>
              The mission of F2C (Farm 2 Clinic) is to connect nutritious, local
              food and nutrition education resources to patients to promote a
              healthy lifestyle and optimize their quality of life while
              reducing food waste.
            </p>
          </div>
          <img
            src="../images/farm2ClinicLogo.png"
            className="logo-image"
            alt="farm2clinic logo"
          ></img>
        </div>
      </div>

      <div className="main-content">
        <div className="our-work-section">
          <h1 className="our-work-title"> Our Work </h1>
          <p className="our-work-text">
            The Farm to Clinic (F2C) Initiative is currently housed in the
            Department of Nutrition Science at East Carolina University under
            the direction of Lauren R. Sastre, PhD, RDN, LDN. Dr. Sastre engages
            in research, teaching, and outreach/service. Current and past work
            in The F2C Initiative has focused on:
            <ul className="our-work-list">
              <li>
                {" "}
                Patient’s preferences, needs, interest and experience
                participating in a produce Rx program.{" "}
              </li>
              <li>
                Impact of medically tailored emergency food bags on hospital
                re-admissions.
              </li>
              <li>
                Farmer’s perceptions and barriers to gleaning/salvaging efforts
                in rural, Eastern North Carolina.
              </li>
              <li>
                Development and evaluation of complimentary programming and
                resources to produce Rx programming to maximize impact on
                nutritional status, health outcomes and disparities.
              </li>
              <li>
                Identifying best-practices for the implementation and evaluation
                of preventative programming that intersects between agriculture,
                academic, community and clinical organizations/partnerships to
                address nutrition and lifestyle driven health disparities.
              </li>
              <li>
                Investigating impact of preventative nutrition and lifestyle
                programming on chronic disease related health disparities
                (health outcomes, promotion health equity) and healthcare
                expenditures (economic impact, health care cost-savings), with a
                focus on under-served/under-resourced patient groups.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="map-content">
        <div className="where-we-are-section">
          <h1 className="where-we-are"> Where We Are </h1>
          <p className="our-work-text">
            Farm2Clinic is currently serving 14 rural counties.
          </p>
        </div>
      </div>
      <div className="map-farm2clinic">
        <img
          src="../images/whereWeAre.png"
          alt="map of where Farm 2 Clinic works"
        />
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default WhatWeDo;
