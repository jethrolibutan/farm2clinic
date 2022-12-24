import React from "react";
import Navbar from "../components/Navbar";
import "./Recipes.css";

function Recipes() {
  return (
    <div>
      <Navbar />
      <div className="recipe-pic">
        <div className="recipe-title">RECIPES</div>
      </div>

      <div className="recipe-list">
        <div className="intro">Check these recipes out!</div>
        <div className="brocoli-section">
          <div className="broccoli-list">
            <h2 className="vegetable-title"> Broccoli</h2>
            <img
              src="../images/broccolibenefits.png"
              className="recipe-container"
            ></img>
          </div>
          <img
            src="../images/broccolirecipe1.png"
            className="recipe-container"
          ></img>
          <img
            src="../images/broccolirecipe2.png"
            className="recipe-container"
          ></img>
          <img
            src="../images/broccolirecipe3.png"
            className="recipe-container"
          ></img>
        </div>

        <div className="cabbage-recipe">
          <div className="cabbage-section">Cabbage</div>
        </div>
        <div className="carrots-recipe"> Carrots</div>
        <div className="cauliflower-recipe"> Cauliflower</div>
        <div className="cantaloupe-recipe"> Cantaloupe</div>
        <div className="collards-recipe"> Collards </div>
        <div className="cucumber-recipe"> Cucumber </div>
      </div>
    </div>
  );
}

export default Recipes;
