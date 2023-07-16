import React from "react";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { Button, Link } from "@mui/material";

import { brocc } from "../../../Helper/EnglishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Broccoli() {
  const [currBroc, setCurrBroc] = useState(0);

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

export default Broccoli;
