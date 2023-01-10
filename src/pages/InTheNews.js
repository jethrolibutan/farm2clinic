import React from "react";
import Navbar from "../components/Navbar";
import "./InTheNews.css";
import { Button, Link } from "@mui/material";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

function InTheNews() {
  return (
    <div>
      <Navbar />
      <div className="news">
        <div className="news-text"> NEWS & MEDIA </div>
      </div>

      <div class="news-list">
        <div className="news-title">Farm To Clinic In the News</div>

        <div className="news-story-1">
          <div className="news-title-story-1">
            ECU teams up with NC free and charitable clinic, Duke Endowment to
            bring uninsured diabetes management program to Eastern NC
          </div>

          <div className="news-story-desc">
            <div className="news-image">
              <img
                src="./images/sastreexercise.jpg"
                alt="Dr. Sastre teaches exercises"
              />
            </div>
            Dr. Lauren Sastre, creator of the Fresh Start program, leads
            patients with type 2 diabetes in an exercise segment during a recent
            class session. The program is helping uninsured patients at free and
            charitable clinics in eastern North Carolina manage chronic disease
            with virtual one-on-one health coaching and in-person group sessions
            like this one that support diet, exercise, and more. Provides
            information on how to control diabetes. Lifestyle changes.
          </div>

          <div className="learn-more-button">
            <Link
              href="https://darik.news/northcarolina/ecu-teams-up-with-nc-free-and-charitable-clinic-duke-endowment-to-bring-uninsured-diabetes-management-program-to-eastern-nc/584967.html"
              rel="noopener"
              target="_blank"
            >
              <Button variant="contained" sx={{ marginRight: "auto" }}>
                {" "}
                Learn More{" "}
              </Button>
            </Link>
          </div>
        </div>

        <div className="news-story-2">
          <div className="news-title-story-2">
            ECU delivers healthy food program to underserved communities in the
            east
          </div>

          <div className="news-story-desc">
            <div className="news-image">
              <img
                src="./images/farm2clinic.jpeg"
                alt="People preparing food"
              />
            </div>
            A van towing a trailer pulls in front of a church in Elizabeth City,
            an eastern North Carolina community challenged by health
            disparities, limited access to health care providers, and
            insufficient healthy food options. Inside the trailer are bags
            filled with fresh vegetables donated from local farmers, tools for
            cooking healthy meals and free giveaways. On the outside of the
            trailer, there is an East Carolina University logo and the
            university’s motto, “servire: To Serve.” The van was on location as
            part of the Fresh Start program, hosted by ECU’s College of Allied
            Health Sciences’ Department of Nutrition Sciences, that brings
            healthy food ingredients to underserved communities and shows
            uninsured patients with Type 2 diabetes how to prepare the
            ingredients to maximize their nutritional value.
          </div>

          <div className="learn-more-button">
            <Link
              href="https://news.ecu.edu/2022/04/08/fresh-start/"
              rel="noopener"
              target="_blank"
            >
              <Button variant="contained" sx={{ marginRight: "auto" }}>
                {" "}
                Learn More{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default InTheNews;
