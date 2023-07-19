import React from "react";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";
import "./Support.css";

function Support() {
  return (
    <div>
      <Navbar />
      <div className="support"> Support </div>

      <div className="support-content">
        <div className="external-support"> External Support </div>
        <div className="external-text">
          The pilot Fresh Start program is currently funded by a $365,000 3-year
          Health Care Grant from The Duke Endowment (2021-2024).
        </div>
        <div className="support-pic-1">
          {" "}
          <a
            href="https://www.dukeendowment.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./images/jamesDuke.jpeg"
              alt="James B. Duke Endowment logo"
            />
          </a>
        </div>

        <div className="external-text">
          The Food Lion Corporation has supported the expansion and outreach of
          the Fresh Start Program and Farm to Clinic Initiative with a $150,000
          in support to construct a new mobile teaching kitchen and outreach
          unit that will be operational in 2023.
        </div>

        <div className="support-pic">
          <a href="https://www.foodlion.com/" target="_blank" rel="noreferrer">
            <img src="./images/foodLion.jpeg" alt="Food Lion logo" />
          </a>
        </div>

        <div className="external-text">
          Move for Hunger has supported the Farm to Clinic initiative with the
          donation of a large cold storage unit to ensure adequate storage for
          fruits and vegetables obtained in Collaboration with the Society of
          St. Andrew.{" "}
        </div>

        <div className="support-pic-1">
          <a href="https://endhunger.org/" target="_blank" rel="noreferrer">
            <img src="./images/saintAndrew.jpeg" alt="Saint Andrew logo" />
          </a>
        </div>

        <div className="internal-support"> Internal Support </div>
        <div className="internal-text">
          A Diversity and Inclusion and Research and Scholarship (DIRS) Program
          grant of $11,500 was awarded for the 2022-2023 to support the
          development and evaluation of the adaptation of the Fresh Start
          program's culinary medicine and nutrition and health education
          components to be tailored for Hispanic/Latinx patients.
        </div>

        <div className="internal-support">
          {" "}
          Attributions for Images/Media Used
        </div>
        <div className="internal-text">
          <div className="indent-space">
            <a
              href="https://www.flaticon.com/free-icons/leaf"
              title="leaf icons"
            >
              Leaf icons created by Pixel perfect - Flaticon
            </a>
          </div>
          &{" "}
          <div className="indent-space">
            {" "}
            <a href="https://pixabay.com/"> Pixaby.com </a>{" "}
          </div>
          &
          <div className="indent-space">
            <a
              href="https://www.flaticon.com/free-icons/turnip"
              title="turnip icons"
            >
              Turnip icons created by Icongeek26 - Flaticon
            </a>
          </div>
        </div>

        <div className="internal-text">
          {" "}
          <div className="indent-space">
            <a
              href="https://www.flaticon.com/free-icons/fruit"
              title="fruit icons"
            >
              Fruit & Vegetable icons created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Support;
