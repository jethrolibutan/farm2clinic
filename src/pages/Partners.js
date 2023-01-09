import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import "./Partners.css";

function Partners() {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div className="partners-whole">
      <Navbar />
      <div className="partners-pic">
        <div className="partners-title">PARTNERS</div>
      </div>

      <div className="partnerships-title"> Our Partners </div>

      {isMatch ? (
        <>
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
              justify="space-around"
              spacing={4}
              sx={{ border: "1px solidgray", width: "450px", height: "auto" }}
            >
              <Grid item xs={6} sx={{ marginTop: "2.5em" }}>
                <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "2.5em" }}>
                <img src="./images/foodbank.jpeg" alt="Food bank logo" />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3em" }}>
                <img
                  src="./images/farmersMarket.jpeg"
                  alt="Farmers Market logo"
                />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3em" }}>
                <img
                  src="./images/pittcountycareclinic.jpeg"
                  alt="Pitt County Clinic logo"
                />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3em" }}>
                <img src="./images/saintAndrew.jpeg" alt="Saint Andrew logo" />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <img src="./images/foodLion.jpeg" alt="Food Lion logo" />
              </Grid>
              <Grid item xs={12}>
                <img src="./images/hopeClinic.jpeg" alt="Hope Clinic logo" />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <img src="./images/merciClinic.png" alt="Merci Clinic logo" />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3em" }}>
                <img
                  src="./images/jamesDuke.jpeg"
                  alt="James B. Duke Endowment logo"
                />
              </Grid>
              <Grid item xs={12} sx={{ marginTop: "3em" }}>
                <img
                  src="./images/albemarle.jpeg"
                  alt="Albemarle Hospital Foundation logo"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Box>

          <div>
            <div className="interested">Interested in Partnering?</div>

            <div className="interested-text">
              If you would like to partner with us, please contact
              sastrel18@ecu.edu and we will get back to you. Please include your
              specific needs and/or ideas for partnership in the Comments.
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justify: "center",
              alignItems: "center",
              margin: "auto",
              marginTop: "25px",
              maxWidth: 1000,
              width: "100%",
            }}
          >
            <Grid
              container
              justify="space-around"
              spacing={4}
              sx={{
                border: "1px solidgray",
                width: "2000px",
                height: "auto",
                justify: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={6} sx={{ marginTop: "2.5em" }}>
                <img src="./images/watchClinic.jpg" alt="Watch Clinic logo" />
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "2.5em" }}>
                <img src="./images/foodbank.jpeg" alt="Food bank logo" />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./images/farmersMarket.jpeg"
                  alt="Farmers Market logo"
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./images/pittcountycareclinic.jpeg"
                  alt="Pitt County Clinic logo"
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img src="./images/saintAndrew.jpeg" alt="Saint Andrew logo" />
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  alignContent: "center",
                  alignItems: "center",
                  justify: "center",
                }}
              >
                <img src="./images/foodLion.jpeg" alt="Food Lion logo" />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img src="./images/hopeClinic.jpeg" alt="Hope Clinic logo" />
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img src="./images/merciClinic.png" alt="Merci Clinic logo" />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  marginBottom: "6em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./images/jamesDuke.jpeg"
                  alt="James B. Duke Endowment logo"
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginTop: "3em",
                  marginBottom: "6em",
                  justify: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./images/albemarle.jpeg"
                  alt="Albemarle Hospital Foundation logo"
                />
              </Grid>
            </Grid>
          </Box>
          <div>
            <div className="interested">Interested in Partnering?</div>

            <div className="interested-text">
              If you would like to partner with us, please contact
              sastrel18@ecu.edu and we will get back to you. Please include your
              specific needs and/or ideas for partnership.
            </div>
          </div>
        </>
      )}

      <SubFooter />
      <Footer />
    </div>
  );
}

export default Partners;
