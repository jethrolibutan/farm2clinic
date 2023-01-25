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

        <div className="news-story-2">
          <div className="news-title-story-2">
            Comprehensive food nutrition program aims to combat disparities in
            diabetes treatments
          </div>

          <div className="news-story-desc">
            <div className="news-image-3">
              <img src="./images/newsStory3.jpg" alt="People preparing food" />
            </div>
            Health care providers have traditionally written prescriptions for
            medications, for exercise, for therapy, even for relaxation for
            their patients. So to combat obesity and poor nutrition, why not
            give patients a prescription to help them eat better? Such food
            prescriptions — delivered to patients in the form of vouchers that
            can help patients get access to more fresh fruits and vegetables —
            are becoming increasingly popular across the U.S. Lauren Sastre, a
            professor in the Department of Nutrition Science at East Carolina
            University, saw the promise of food prescription programs in fall
            2018 when she started researching their implementation. While she
            considered them helpful, Sastre didn’t think they went far enough in
            breaking down barriers to getting healthy food.
          </div>
        </div>

        <div className="learn-more-button">
          <Link
            href="https://www.northcarolinahealthnews.org/2023/01/19/comprehensive-food-nutrition-program-aims-to-combat-disparities-in-diabetes-treatments/"
            rel="noopener"
            target="_blank"
          >
            <Button variant="contained" sx={{ marginRight: "auto" }}>
              {" "}
              Learn More{" "}
            </Button>
          </Link>
        </div>

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
            <div className="news-mobile-image">
              <img
                src="./images/sastreexercisemobile.jpeg"
                alt="People preparing food"
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
