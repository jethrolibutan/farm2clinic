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
        <div class="first-row">
          <div class="one">
            {" "}
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/artichoke.png"
                title="Artichoke"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/asparagus.png"
                title="Asparagus"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/beet.png"
                title="Beets"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/bellPepper.png"
                title="Bell Pepper"
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
                sx={{ height: 200, width: 200 }}
                component="img"
                src="../../images/englishVegetableImages/blueberries.png"
                title="Blueberries"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/broccoli.png"
                title="Broccoli"
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
            <Card sx={{ maxWidth: 230 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/brusselSprouts.png"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/butternutSquash.png"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/cabbage.png"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/cantaloupe.png"
                title="cantaloupe"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/carrot.png"
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
                sx={{ height: 225 }}
                component="img"
                src="../../images/englishVegetableImages/cauliflower.png"
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
                sx={{ height: 225 }}
                component="img"
                src="../../images/englishVegetableImages/collard.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/cucumber.png"
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
                sx={{ height: 200 }}
                component="img"
                src="../../images/englishVegetableImages/eggplant.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/greenBellPepper.png"
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
                sx={{ height: 190 }}
                component="img"
                src="../../images/englishVegetableImages/kale.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/leeks.png"
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
                sx={{ height: 240 }}
                component="img"
                src="../../images/englishVegetableImages/okra.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/pumpkin.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/spaghettiSquash.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/sweetPotato.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/turnip.png"
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
                sx={{ height: 190 }}
                component="img"
                src="../../images/englishVegetableImages/watermelon.png"
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
                sx={{ height: 230 }}
                component="img"
                src="../../images/englishVegetableImages/yellowSquash.png"
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
                sx={{ height: 220 }}
                component="img"
                src="../../images/englishVegetableImages/zucchini.png"
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
        </div>
      </div>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Recipes;
