import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { asparagus } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AsparagusSpanish() {
  const [currAsp, setCurrAsp] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={asparagus[currAsp].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${asparagus[currAsp].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currAsp > 0 && setCurrAsp(currAsp - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currAsp < asparagus.length - 1 && setCurrAsp(currAsp + 1);
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

export default AsparagusSpanish;
