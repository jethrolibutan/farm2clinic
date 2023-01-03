import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import "./Publications.css";

function Publications() {
  return (
    <div>
      <Navbar />

      <div className="publications">Publications</div>

      <div className="publication-section">
        <div className="presentation-section">
          <div className="publication-title">
            SELECT NATIONAL SCIENTIFIC PRESENTATIONS (Peer-Reviewed)
          </div>
          <div className="indent1">
            <p>
              {" "}
              1. Vegetable Consumption by Low-Socioeconomic Patients Targeted
              for Produce Rx. Win R**, Smith E*,
              <div className="indent2">
                Sastre L. Poster Presentation. Food Insecurity, Neighborhood
                Food Environment, and Nutrition Health Disparities: State of the
                Science, National Institute of Health. September 23, 2021.
              </div>
            </p>
          </div>
          <div className="indent1">
            2. HEALED: A Produce Rx Program Targeting Rural Uninsured Patients
            with Diabetes. Stroud B*, Batt
            <div className="indent2">
              H**, Humphries W, Liang C, Sastre L. Poster Presentation. Food
              Insecurity, Neighborhood Food Environment, and Nutrition Health
              Disparities: State of the Science, National Institute of Health.
              September 23, 2021.
            </div>
          </div>
          <div className="indent1">
            3. Farmer's Perceptions of Gleaning: Opportunities and Barriers to
            Food Recovery. Stroud B, Bradshaw
            <div className="indent2">
              {" "}
              R, Sastre L. Poster Presentation. Food Insecurity, Neighborhood
              Food Environment, and Nutrition Health Disparities: State of the
              Science, National Institute of Health. September 23, 2021.
            </div>
          </div>
          <div className="indent1">
            4. Food Insecurity, Food-Based Interventions and Chronic Disease
            Management. Batt H**, Jacobs M,{" "}
            <div className="indent2">
              Sastre L. Poster Presentation. Food Insecurity, Neighborhood Food
              Environment, and Nutrition Health Disparities: State of the
              Science, National Institute of Health. September 23, 2021.{" "}
            </div>
          </div>
          <div className="indent1">
            5. Taking a Bite out of Produce Rx Program Gaps: The HEALED Program.
            Batt H**, Stroud B*, Liang C,
            <div className="indent2">
              Sastre L. Poster Presentation. SOPHE 2022 73rd Annual Conference,
              Health Education: The ARCH of an Era, March 22-25, 2022.{" "}
            </div>
          </div>
          <div className="indent1">
            6. We Asked, Patients Answered: Preferences for a Produce Rx
            Program. Hendrix K**, Smith E*, Stroud
            <div className="indent2">
              {" "}
              B*, Sastre L. Virtual Poster Presentation. American Public Health
              Association (APHA) 2021 Annual Meeting, Denver, Colorado October
              22, 2021.{" "}
            </div>
          </div>
          <di className="indent1" v>
            7. Evaluation of a Sustainable Produce Prescription Model. Stroud
            B*, Sastre L. Virtual Poster{" "}
            <div className="indent3">
              Presentation. American Public Health Association (APHA) 2021
              Annual Meeting, Denver, Colorado October 22, 2021.{" "}
            </div>
          </di>
          <div className="indent1">
            8. Fresh Start: A comprehensive nutrition program targeting multiple
            social determinants of health to{" "}
            <div className="indent2">
              {" "}
              optimize diabetes management with uninsured patients. Stroud B*,
              Sastre L. Poster Presentation. American Public Health Association
              (APHA) 2021 Annual Meeting, Boston MA, November 9, 2022.{" "}
            </div>
          </div>
          <div className="indent1">
            9. HEALED: A rural delivery-based produce prescription program for
            uninsured patients with type-2{" "}
            <div className="indent2">
              {" "}
              diabetes improves glycemic control. Stroud B*, Sastre L. Oral
              Presentation. American Public Health Association (APHA) 2021
              Annual Meeting, Boston MA, November 9, 2022.{" "}
            </div>
          </div>
          <div className="publication-title">Peer-Review Publications</div>
          <div className="indent1">
            1.Tripp M, Jacobs M, Sastre L. (2020) Perceptions, Satisfaction, and
            Experience of Low-Socioeconomic, Rural Patients Who Participated in
            a Pilot Farm to Clinic (F2C) Program Utilizing Local, Donated
            Produce, Journal of Hunger & Environmental Nutrition, DOI:
            10.1080/19320248.2020.1860848
          </div>
          <div className="indent1">
            2. Sastre L, Wynn D, Roupe M, Jacobs M. Link between redemption of a
            medical food pantry voucher and reduced hospital readmissions. Prev
            Med Rep. 2021 May 18;23:101400. doi: 10.1016/j.pmedr.2021.101400.
            PMID: 34136336; PMCID: PMC8178117.
          </div>
          <div className="indent1">
            3.Stroud B*, Sastre L (2022). From the Field to the Clinic: A
            Gleaning and Donation-Based Produce Program for Rural,
            Low-Socioeconomic Patients Journal of Health Promotion and Practice
            King R*, Chua J, Nunnery D, Sastre L .Opportunities and Lessons
            Learned to Support Didactic Experiential Learning through a
            Nutrition Education and Counseling Pilot at an FQHC. The Journal of
            the Academy of Nutrition and Dietetics.
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Publications;
