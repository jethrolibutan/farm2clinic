import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { Button, Link } from "@mui/material";

import { cabbage } from "../../../Helper/EnglishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Cabbage() {
  const [currCabb, setCurrCabb] = useState(0);

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
        <img src="../../../images/cabbage.png" alt="Cabbage" />
      </div>

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

export default Cabbage;
