import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { bell } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function BroccoliSpanish() {
  const [currBell, setCurrBell] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className>
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={bell[currBell].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${bell[currBell].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currBell > 0 && setCurrBell(currBell - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currBell < bell.length - 1 && setCurrBell(currBell + 1);
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
