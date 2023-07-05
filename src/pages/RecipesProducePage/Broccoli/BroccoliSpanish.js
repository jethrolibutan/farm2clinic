import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { brocc } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function BroccoliSpanish() {
  const [currBroc, setCurrBroc] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={brocc[currBroc].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${brocc[currBroc].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currBroc > 0 && setCurrBroc(currBroc - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currBroc < brocc.length - 1 && setCurrBroc(currBroc + 1);
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

export default BroccoliSpanish;
