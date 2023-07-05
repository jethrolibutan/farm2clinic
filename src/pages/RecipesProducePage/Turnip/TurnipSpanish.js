import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { turnip } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TurnipSpanish() {
  const [currTurnip, setCurrTurnip] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div
            src={turnip[currTurnip].img}
            className="carouselInner"
            style={{
              backgroundImage: `url(${turnip[currTurnip].img})`,
            }}
          >
            <div
              className="left"
              onClick={() => {
                currTurnip > 0 && setCurrTurnip(currTurnip - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currTurnip < turnip.length - 1 && setCurrTurnip(currTurnip + 1);
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

export default TurnipSpanish;
