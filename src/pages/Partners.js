import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";

import { Grid, Box, Typography } from "@mui/material";
import "./Partners.css";

function Partners() {
  return (
    <div className="partners-whole">
      <Navbar />
      <div className="partners-pic">
        <div className="partners-title">PARTNERS</div>
      </div>

      <div className="partnerships-title"> Our Partners </div>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "25px",
          maxWidth: 450,
          width: "100%",
        }}
      >
        <Grid
          container
          sx={{ border: "1px solidgray", width: "450px", height: "1000px" }}
        >
          <Grid item xs={6}>
            <img src="./images/watchClinic.jpg" />
          </Grid>
          <Grid item xs={6}>
            <img src="./images/foodbank.jpeg" className="regular-picture" />
          </Grid>
          <Grid item xs={12}>
            <img src="./images/farmersMarket.jpeg" />
          </Grid>
          <Grid item xs={12}>
            <img src="./images/pittcountycareclinic.jpeg" />
          </Grid>
          <Grid item xs={12}>
            <img src="./images/saintAndrew.jpeg" />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <img src="./images/pittcountycareclinic.jpeg" />
          </Grid>
          <Grid item xs={12}>
            <img src="./images/saintAndrew.jpeg" />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <img src="./images/pittcountycareclinic.jpeg" />
          </Grid>
          <Grid item xs={12}>
            <img src="./images/saintAndrew.jpeg" />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Partners;
