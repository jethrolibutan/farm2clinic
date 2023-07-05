import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { carrot } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarrotSpanish() {
  const [currCarrot, setCurrCarrot] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div>Broccoli</div>
          <div
            src={carrot[currCarrot].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${carrot[currCarrot].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currCarrot > 0 && setCurrCarrot(currCarrot - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currCarrot < carrot.length - 1 && setCurrCarrot(currCarrot + 1);
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

export default CarrotSpanish;
