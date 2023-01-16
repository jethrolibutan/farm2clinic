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
          <div className="rows">
            <div> </div> <div></div>
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default GetInvolved;
