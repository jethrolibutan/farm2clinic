import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { sweetPotato } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SweetPotatoSpanish() {
  const [currPotato, setCurrPotato] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div
            src={sweetPotato[currPotato].img}
            className="carouselInner"
            style={{
              backgroundImage: `url(${sweetPotato[currPotato].img})`,
            }}
          >
            <div
              className="left"
              onClick={() => {
                currPotato > 0 && setCurrPotato(currPotato - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currPotato < sweetPotato.length - 1 &&
                  setCurrPotato(currPotato + 1);
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

export default SweetPotatoSpanish;
