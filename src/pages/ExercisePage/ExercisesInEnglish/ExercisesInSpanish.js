import React from "react";
import Navbar from "../../../components/Navbar";
import SubFooter from "../../../components/SubFooter";
import Footer from "../../../components/Footer";
import { Button, Link } from "@mui/material";

function ExercisesInSpanish() {
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
            href="/exercisesInSpanish"
            sx={{ mt: "20px", ml: "10px", mr: "10px" }}
          >
            {" "}
            Exercises in Spanish{" "}
          </Button>
        </div>
      </div>
      <div className="exercise-list"></div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default ExercisesInSpanish;
