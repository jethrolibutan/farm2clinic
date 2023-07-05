import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { cauliflower } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CauliflowerSpanish() {
  const [currCauliflower, setCurrCauliflower] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={cauliflower[currCauliflower].img}
            className="carouselInner"
            style={{
              backgroundImage: `url(${cauliflower[currCauliflower].img})`,
            }}
          >
            <div
              className="left"
              onClick={() => {
                currCauliflower > 0 && setCurrCauliflower(currCauliflower - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currCauliflower < cauliflower.length - 1 &&
                  setCurrCauliflower(currCauliflower + 1);
              }}
            >
              <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
            </div>
            <div />
          </div>
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default CauliflowerSpanish;
