import React from "react";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";
import "./Donate.css";

function Donate() {
  return (
    <div>
      <Navbar />
      <div className="donate">Donate</div>

      <div className="current-needs-title"> Farm2Clinic's Current Needs!</div>
      <p className="current-needs-list">
        <ul className="current-needs">
          <li>
            Healthy Snacks (for patients and to feed the student volunteers on
            the long road trips for program delivery!, e.g., protein bars, smart
            pop/skinny popcorn, baked chips, veggie straws).{" "}
          </li>
          <li>
            Gas Cards (for patients who struggle with transportation to make it
            to classes to participate and pick up their food).
          </li>
          <li>
            Kitchen cookware (equipment, smaller items/utensils) (for patient
            incentives, to raffle during classes and provide as support for
            healthy eating at home).
          </li>
          <li>Re-usable water bottles (patient incentives). </li>
          <li>
            Direct $ donations for students: can support: student assistantships
            to work within the program (some students would like to work with us
            beyond volunteering but are prevented by needing to work to support
            themselves).{" "}
          </li>
          <li>
            Direct $ donations for replenishing perishable supplies (e.g., dry
            ingredients for cooking demonstrations, soap, hand sanitizer,
            cleaning supplies, paper plates and plastic forks for taste testing
            at classes).{" "}
          </li>
          <li>
            Grocery store gift-cards (for patients who complete program
            components to further support healthy food access).{" "}
          </li>
          <li>Colored Paper/Cardstock (handouts for patients). </li>
        </ul>
      </p>

      <div className="contact-farm-2-clinic"> Contact Farm 2 Clinic! </div>
      <div className="form-for-contact">
        <form action="https://formspree.io/f/xrgvbplg" method="post">
          <fieldset id="fs-frm-inputs">
            <label for="full-name">Full Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="First and Last Name"
              required=""
            />

            <label for="email-address">Email Address</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="youremail@domain.com"
              required=""
            />

            <label for="message"> Your Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Type your message here! Contact us with any questions you may have, if you want to get involved, or with any other inquiries you may have!"
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />

            <input type="submit" value="Submit" />
          </fieldset>
        </form>{" "}
      </div>
      <div claassName="get-involved-container">
        <div className="follow-us-section">
          {" "}
          <div className="follow-us-title">Follow us on social media!</div>
          <div className="social-media-rows">
            <div className="social-media">
              {" "}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/facebookicon.png" alt="Watch Clinic logo" />
              </a>
            </div>{" "}
            <div className="social-media">
              {" "}
              <a
                href="https://instagram.com/farm2clinic/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/instagramicon.png" alt="Watch Clinic logo" />
              </a>
            </div>
          </div>
          <div className="social-media-rows">
            <div className="social-media">
              <a
                href="https://twitter.com/farm2clinic"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/twitterIcon.png" alt="Watch Clinic logo" />
              </a>
            </div>{" "}
            <div className="social-media">
              <a
                href="https://youtube.com/channel/UCpuQAa3TLdvy8VKbUpnIVkA"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./images/youtubeicon.png" alt="Watch Clinic logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-map">
          <iframe
            width="399"
            height="542"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=399&amp;height=542&amp;hl=en&amp;q=Health%20Sciences%20Building,%20Greenville%20Greenville+(Health%20Sciences%20Building)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="map-container"
            title="map"
          ></iframe>
        </div>

        <SubFooter />
        <Footer />
      </div>
    </div>
  );
}

export default Donate;
