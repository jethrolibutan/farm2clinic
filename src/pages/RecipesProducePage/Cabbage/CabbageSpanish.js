import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { cabbage } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CabbageSpanish() {
  const [currCabb, setCurrCabb] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={cabbage[currCabb].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${cabbage[currCabb].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currCabb > 0 && setCurrCabb(currCabb - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currCabb < cabbage.length - 1 && setCurrCabb(currCabb + 1);
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

export default CabbageSpanish;
