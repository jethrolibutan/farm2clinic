import React from "react";
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";
import {
  Button,
  Link,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";

function ExerciseVideosInEnglish() {
  return (
    <div>
      <Navbar />
      <div className="exercises">
        {" "}
        Physical Activity Resources
        <div className="">
          <Button
            variant="contained"
            component={Link}
            href="/exercises"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Exercises in English{" "}
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/exerciseVideosInEnglish"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Exercise Videos in English{" "}
          </Button>
          <Button
            variant="contained"
            component={Link}
            href="/exercisesInSpanish"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Exercises in Spanish{" "}
          </Button>
        </div>
      </div>
      <div>
        <div className="exercise-row">
          <div class="exercise">
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/balance.png"
                title="Balance/GAIT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Balance/GAIT
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/balance-gait" size="small">
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div className="exercise">
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/chronicPain.png"
                title="Chronic Pain"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chronic Pain
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/chronicPain" size="small">
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>

          <div className="exercise">
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/flexible.png"
                title="Flexibility Training"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Flexibility Training
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  href="/flexibilityTraining"
                  size="small"
                >
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div className="exercise-row">
          <div class="exercise">
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/home.png"
                title="Household Resistance"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Household Resistance
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  href="/householdResistance"
                  size="small"
                >
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div className="exercise">
            <Card sx={{ maxWidth: 215 }}>
              <CardMedia
                sx={{ height: 230 }}
                component="img"
                src="../../images/exerciseImages/resistance.png"
                title="Resistance Training w/ Bands"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Resistance Training w/ Bands
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/chronicPain" size="small">
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>

          <div className="exercise">
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/seatedCardio.png"
                title="Seated Cardio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Seated Cardio
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/seatedCardio" size="small">
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
        </div>
        <div className="exercise-row">
          <div class="exercise">
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/seatedCore.png"
                title="Seated Core"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Seated Core
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/seatedCore" size="small">
                  {" "}
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>
          <div className="exercise">
            <Card sx={{ maxWidth: 230 }}>
              <CardMedia
                sx={{ height: 240 }}
                component="img"
                src="../../images/exerciseImages/totalBodyWorkout.png"
                title="Total Body Workout"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Total Body Workout
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/totalBodyWorkout" size="small">
                  Exercises{" "}
                </Button>
              </CardActions>
            </Card>{" "}
          </div>

          <div className="exercise">
            <Card sx={{ maxWidth: 225 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                src="../../images/exerciseImages/yoga1.png"
                title="Yoga"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yoga
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} href="/yoga" size="small">
                  {" "}
                  Exercises{" "}
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

export default ExerciseVideosInEnglish;
