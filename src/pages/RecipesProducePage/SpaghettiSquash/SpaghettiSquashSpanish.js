import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { spagSquash } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SpaghettiSquashRecipesSpanish() {
  const [currSpagSquash, setCurrSpagSquash] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div
            src={spagSquash[currSpagSquash].img}
            className="carouselInner"
            style={{
              backgroundImage: `url(${spagSquash[currSpagSquash].img})`,
            }}
          >
            <div
              className="left"
              onClick={() => {
                currSpagSquash > 0 && setCurrSpagSquash(currSpagSquash - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currSpagSquash < spagSquash.length - 1 &&
                  setCurrSpagSquash(currSpagSquash + 1);
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

export default SpaghettiSquashRecipesSpanish;
