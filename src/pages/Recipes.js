import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  images,
  cabbage,
  cantaloupe,
  carrot,
  cauliflower,
  collard,
  cucumber,
  greenBean,
} from "../Helper/CarouselData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Recipes.css";

function Recipes() {
  const [currImg, setCurrImg] = useState(0);
  const [currCabb, setCurrCabb] = useState(0);
  const [currCant, setCurrCant] = useState(0);
  const [currCarr, setCurrCarr] = useState(0);
  const [currCauli, setCurrCauli] = useState(0);
  const [currCol, setCurrCol] = useState(0);
  const [currCuc, setCurrCuc] = useState(0);
  const [currGb, setCurrGb] = useState(0);

  return (
    <div className="recipe-whole">
      <Navbar />
      <div className="recipe-pic">
        <div className="recipe-title">RECIPES</div>
      </div>

      <div>
        <div>Broccoli</div>
        <div className="carousel">
          <div
            src={images[currImg].img}
            className="carouselInner"
            style={{ backgroundImage: `url(${images[currImg].img})` }}
          >
            <div
              className="left"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <ArrowBackIosIcon />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <ArrowForwardIosIcon />
            </div>
            <div />
          </div>
        </div>
      </div>

      <div> Cabbage </div>
      <div className="cabbage">
        <div
          src={cabbage[currCabb].img}
          className="cabbageInner"
          style={{ backgroundImage: `url(${cabbage[currCabb].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCabb > 0 && setCurrCabb(currCabb - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCabb < cabbage.length - 1 && setCurrCabb(currCabb + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Cantaloupe </div>
      <div className="cantaloupe">
        <div
          src={cantaloupe[currCant].img}
          className="cabbageInner"
          style={{ backgroundImage: `url(${cantaloupe[currCant].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCant > 0 && setCurrCant(currCant - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCant < cantaloupe.length - 1 && setCurrCant(currCant + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Carrot </div>
      <div className="carrot">
        <div
          src={carrot[currCarr].img}
          className="carrotInner"
          style={{ backgroundImage: `url(${carrot[currCarr].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCarr > 0 && setCurrCarr(currCarr - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCarr < carrot.length - 1 && setCurrCarr(currCarr + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Cauliflower </div>
      <div className="cauliflower">
        <div
          src={cauliflower[currCauli].img}
          className="carrotInner"
          style={{ backgroundImage: `url(${cauliflower[currCauli].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCauli > 0 && setCurrCauli(currCauli - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCauli < cauliflower.length - 1 && setCurrCauli(currCauli + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Collard Greens </div>
      <div className="collard">
        <div
          src={collard[currCol].img}
          className="collardInner"
          style={{ backgroundImage: `url(${collard[currCol].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCol > 0 && setCurrCol(currCol - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCol < collard.length - 1 && setCurrCol(currCol + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Cucumber </div>
      <div className="cucumber">
        <div
          src={cucumber[currCuc].img}
          className="cucumberInner"
          style={{ backgroundImage: `url(${cucumber[currCuc].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currCuc > 0 && setCurrCuc(currCuc - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCuc < cucumber.length - 1 && setCurrCuc(currCuc + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>

      <div> Green Bean </div>
      <div className="green-bean">
        <div
          src={greenBean[currGb].img}
          className="greenBeanInner"
          style={{ backgroundImage: `url(${greenBean[currGb].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currGb > 0 && setCurrGb(currGb - 1);
            }}
          >
            <ArrowBackIosIcon />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currGb < greenBean.length - 1 && setCurrGb(currGb + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Recipes;
