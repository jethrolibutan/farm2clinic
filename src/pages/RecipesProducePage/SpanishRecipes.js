import React from "react";
import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  MenuItem,
} from "@mui/material";
import { Button, Link } from "@mui/material";
import Navbar from "../../components/Navbar";
import {
  cabbage,
  cantaloupe,
  carrot,
  cauliflower,
  collard,
  cucumber,
  greenBean,
  kale,
  okra,
  spinach,
  squash,
  sweetPotato,
  turnip,
  whitePotato,
} from "../../Helper/SpanishData";
import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SpanishRecipes() {
  const [currBroc, setCurrBroc] = useState(0);
  const [currCabb, setCurrCabb] = useState(0);
  const [currCant, setCurrCant] = useState(0);
  const [currCarr, setCurrCarr] = useState(0);
  const [currCauli, setCurrCauli] = useState(0);
  const [currCol, setCurrCol] = useState(0);
  const [currCuc, setCurrCuc] = useState(0);
  const [currGb, setCurrGb] = useState(0);
  const [currKale, setCurrKale] = useState(0);
  const [currOk, setCurrOk] = useState(0);
  const [currSpin, setCurrSpin] = useState(0);
  const [currSquash, setCurrSquash] = useState(0);
  const [currSweet, setCurrSweet] = useState(0);
  const [currTurn, setCurrTurn] = useState(0);
  const [currWhite, setCurrWhite] = useState(0);

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

      <div>This page is under construction!!</div>

      <div class="first-row">
        <div class="one">
          {" "}
          <Card sx={{ maxWidth: 225 }}>
            <CardMedia
              sx={{ height: 120 }}
              component="img"
              src="../../images/albemarle.jpeg"
              title="Asparagus"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Asparagus
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/asparagusSpanish" size="small">
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
              title="Bell Pepper"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bell Pepper
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/bellPepperSpanish" size="small">
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
              title="Broccoli"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Broccoli
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/broccoliSpanish" size="small">
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
              title="Cabbage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cabbage
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/cabbageSpanish" size="small">
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
              title="Carrot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Carrot
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/carrotSpanish" size="small">
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
              title="Cauliflower"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cauliflower
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/cauliflowerSpanish" size="small">
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
              <Button component={Link} href="/kaleSpanish" size="small">
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
              <Button component={Link} href="/collardSpanish" size="small">
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
              title="Spaghetti Squash"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Spaghetti Squash
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                href="/spaghettiSquashSpanish"
                size="small"
              >
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
              <Button component={Link} href="/sweetPotatoSpanish" size="small">
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
              title="Turnip"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Turnip
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/turnipSpanish" size="small">
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
              title="Zucchinni"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Zucchini
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} href="/zucchiniSpanish" size="small">
                {" "}
                Recipes{" "}
              </Button>
            </CardActions>
          </Card>{" "}
        </div>
      </div>

      {/* <div className="cabbage">
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

export default SpanishRecipes;