import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { zucchini } from "../../../Helper/SpanishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ZucchiniSpanish() {
  const [currZucchini, setCurrZucchini] = useState(0);

  return (
    <div>
      <Navbar />
      {/* BroccoliSpanish */}
      <div className="produce">
        <div className="carousel">
          <div
            src={zucchini[currZucchini].img}
            className="carouselInner"
            style={{
              backgroundImage: `url(${zucchini[currZucchini].img})`,
            }}
          >
            <div
              className="left"
              onClick={() => {
                currZucchini > 0 && setCurrZucchini(currZucchini - 1);
              }}
            >
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currZucchini < zucchini.length - 1 &&
                  setCurrZucchini(currZucchini + 1);
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

export default ZucchiniSpanish;
