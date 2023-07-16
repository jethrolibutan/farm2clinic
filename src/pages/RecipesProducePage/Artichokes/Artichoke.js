import React from "react";
import { useState } from "react";

import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";

import { Button, Link } from "@mui/material";

import { artichoke } from "../../../Helper/EnglishData";

function Artichoke() {
  const [currArt, setCurrArt] = useState(0);

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
        <img src="../../../images/art1.jpg" alt="Artichoke" />
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Artichoke;
