import React from "react";
import { useState } from "react";
import { Button, Link } from "@mui/material";
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { zucchini } from "../../../Helper/EnglishData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Zucchini() {
  const [currZucchini, setCurrZucchini] = useState(0);

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
        <img src="../../../images/zucchini.png" alt="Zucchini" />
      </div>

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

export default Zucchini;
