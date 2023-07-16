import React from "react";
import {
  Button,
  Link,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar";

import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./Recipes.css";

function Recipes() {
  return (
    <div className="recipe-whole">
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

      <div className="recipes-mobile">
        <div className="recipes-mobile-desc">
          Download recipes to your device!
        </div>
        <Button
          variant="contained"
          component={Link}
          href="https://drive.google.com/drive/folders/1QV5zy-8rqR4EZfcSAConhwAWp7-AtgE4?usp=share_link"
          sx={{ mt: "25px", mb: "25px" }}
        >
          {" "}
          Recipes in English{" "}
        </Button>
        <Button
          variant="contained"
          component={Link}
          href="https://drive.google.com/drive/folders/1iXwYZteVZS_LyOc5Y601M1I7GBqhKWi4?usp=share_link"
          sx={{ mt: "25px", mb: "10px" }}
        >
          {" "}
          Recipes in Spanish{" "}
        </Button>
      </div>

      <div>
        <div>This page is under rennovation !!</div>

        <div class="first-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Artichoke
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/artichoke" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Asparagus
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/asparagus" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Beets
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/beets" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bell Pepper
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/bellPepper" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Blueberries
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/blueberries" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div class="second-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Broccoli
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/broccoli" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Brussel Sprouts"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brussel Sprouts
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/brusselSprouts" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Butternut Squash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Butternut Squash
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/butternutSquash" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Cabbage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cabbage
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/cabbage" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Cantaloupe"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cantaloupe
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/cantaloupe" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div class="third-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Carrot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Carrot
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/carrot" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Cauliflower"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cauliflower
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/cauliflower" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Collard"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Collard
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/collards" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Cucumber"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cucumber
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/cucumbers" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Eggplant"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Eggplant
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/eggplant" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div class="fourth-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Green Peppers"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Green Peppers{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/greenPeppers" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Kale"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kale
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/kale" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Leeks"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Leeks
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/leeks" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Okra"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Okra
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/okra" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Pumpkin"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pumpkin
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/pumpkin" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div class="fifth-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Spaghetti Squash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spaghetti Squash
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/spaghettiSquash" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Sweet Potato"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sweet Potato
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/sweetPotato" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Turnips"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Turnips
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/turnips" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Watermelon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Watermelon
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/watermelon" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="Yellow Squash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yellow Squash
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/yellowSquash" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>

        <div class="fifth-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 120 }}
                component="img"
                src="../../images/albemarle.jpeg"
                title="zucchini"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Zucchini
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/Zucchini" size="small">
                  {" "}
                  Recipes{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          {/* <div class="one"> Sweet Potato </div>
          <div class="one"> Turnips </div>
          <div class="one"> Watermelon </div>
          <div class="one"> Yellow Squash </div> */}
        </div>
      </div>

      {/* <div>
        <div className="carousel">
          <div>Broccoli</div>
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
              <ArrowBackIosIcon sx={{ pl: 1.5 }} />
            </div>
            <div className="center"></div>
            <div
              className="right"
              onClick={() => {
                currImg < images.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
            </div>
            <div />
          </div>
        </div>
      </div>

      <div className="cabbage">
        <div> Cabbage </div>
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

      <div className="cantaloupe">
        <div> Cantaloupe </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCant < cantaloupe.length - 1 && setCurrCant(currCant + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="carrot">
        <div> Carrot </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCarr < carrot.length - 1 && setCurrCarr(currCarr + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="cauliflower">
        <div> Cauliflower </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCauli < cauliflower.length - 1 && setCurrCauli(currCauli + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="collard">
        <div> Collard Greens </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCol < collard.length - 1 && setCurrCol(currCol + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="cucumber">
        <div> Cucumber </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currCuc < cucumber.length - 1 && setCurrCuc(currCuc + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="green-bean">
        <div> Green Bean </div>
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
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currGb < greenBean.length - 1 && setCurrGb(currGb + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="kale">
        <div> Kale </div>
        <div
          src={kale[currKale].img}
          className="kaleInner"
          style={{ backgroundImage: `url(${kale[currKale].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currKale > 0 && setCurrKale(currKale - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currKale < kale.length - 1 && setCurrKale(currKale + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="okra">
        <div> Okra </div>
        <div
          src={okra[currOk].img}
          className="okraInner"
          style={{ backgroundImage: `url(${okra[currOk].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currOk > 0 && setCurrOk(currOk - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currOk < okra.length - 1 && setCurrOk(currOk + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="spinach">
        <div> Spinach </div>
        <div
          src={spinach[currSpin].img}
          className="spinachInner"
          style={{ backgroundImage: `url(${spinach[currSpin].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currSpin > 0 && setCurrSpin(currSpin - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currSpin < spinach.length - 1 && setCurrSpin(currSpin + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="squash">
        <div> Squash </div>
        <div
          src={squash[currSquash].img}
          className="squashInner"
          style={{ backgroundImage: `url(${squash[currSquash].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currSquash > 0 && setCurrSquash(currSquash - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currSquash < squash.length - 1 && setCurrSquash(currSquash + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="sweet">
        <div> Sweet Potato </div>
        <div
          src={sweetPotato[currSweet].img}
          className="sweetInner"
          style={{ backgroundImage: `url(${sweetPotato[currSweet].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currSweet > 0 && setCurrSweet(currSweet - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currSweet < sweetPotato.length - 1 && setCurrSweet(currSweet + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="turnip">
        <div> Turnip </div>
        <div
          src={turnip[currTurn].img}
          className="turnipInner"
          style={{ backgroundImage: `url(${turnip[currTurn].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currTurn > 0 && setCurrTurn(currTurn - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currTurn < turnip.length - 1 && setCurrTurn(currTurn + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div>

      <div className="white">
        <div> White Potato </div>
        <div
          src={whitePotato[currWhite].img}
          className="whiteInner"
          style={{ backgroundImage: `url(${whitePotato[currWhite].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currWhite > 0 && setCurrWhite(currWhite - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ pl: 1.5 }} />
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currWhite < whitePotato.length - 1 && setCurrWhite(currWhite + 1);
            }}
          >
            <ArrowForwardIosIcon sx={{ pr: 1.5 }} />
          </div>
          <div />
        </div>
      </div> */}

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Recipes;
