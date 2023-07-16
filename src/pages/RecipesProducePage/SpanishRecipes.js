import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Button, Link } from "@mui/material";
import Navbar from "../../components/Navbar";
import SubFooter from "../../components/SubFooter";
import Footer from "../../components/Footer";

function SpanishRecipes() {
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

      {/* <div>This page is under construction!!</div> */}

      <div class="first-row">
        <div class="one">
          {" "}
          <Card sx={{ maxWidth: 225 }}>
            <CardMedia
              sx={{ height: 200 }}
              component="img"
              src="../../images/spanishVegetableImages/asparagus.png"
              title="Asparagus"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              src="../../images/spanishVegetableImages/bellpepper.png"
              title="Bell Pepper"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/broccoli.png"
              title="Broccoli"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              image="../../images/spanishVegetableImages/cabbage.png"
              title="Cabbage"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              image="../../images/spanishVegetableImages/carrot.png"
              title="Carrot"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/cauliflower.png"
              title="Cauliflower"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/kale.png"
              title="Kale"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/collard.png"
              title="Collard"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 220 }}
              component="img"
              image="../../images/spanishVegetableImages/squash.png"
              title="Spaghetti Squash"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 210 }}
              component="img"
              image="../../images/spanishVegetableImages/sweetpotato.png"
              title="Sweet Potato"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/turnip.png"
              title="Turnip"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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
              sx={{ height: 200 }}
              component="img"
              image="../../images/spanishVegetableImages/zucchini.png"
              title="Zucchinni"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontFamily="bounded"
              >
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

      <SubFooter />
      <Footer />
    </div>
  );
}

export default SpanishRecipes;
