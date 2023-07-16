import React from "react";
import { useState } from "react";
import { Button, Link } from "@mui/material";
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { turnip } from "../../../Helper/EnglishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Turnips() {
  const [currTurnip, setCurrTurnip] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="recipe-pic">
        <div className="recipe-title">RECIPES</div>

        <div className="recipe-links-not-mobile">
          <Button
            variant="contained"
            component={Link}
            href="/recipes"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Recipes in English{" "}
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/spanishRecipes"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Recipes in Spanish{" "}
          </Button>
        </div>
      </div>

      <div className="carousel-produce">
        <img src="../../../images/Turnips.png" alt="Turnips" />
      </div>

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

export default Turnips;
