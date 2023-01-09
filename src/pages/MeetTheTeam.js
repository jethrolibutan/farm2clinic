import React from "react";
import Navbar from "../components/Navbar";
import SubFooter from "../components/SubFooter";
import Footer from "../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

import "./MeetTheTeam.css";

function MeetTheTeam() {
  return (
    <div className="cards-list">
      <Navbar />
      <div className="exec-container">
        <div className="meet-the-team">
          <h1 classsName="meet-the-team-title"> Meet The Team</h1>
        </div>
        <div className="team-rows">
          <Box>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image="../images/sastre1.jpg"
                  alt="Doctor Lauren Sastre"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Director
                  </Typography>
                  <Typography
                    variant="body"
                    color="text.secondary"
                    sx={{ textAlign: "left" }}
                  >
                    Dr. Lauren R. Sastre is an Assistant Professor in the
                    Department of Nutrition Science and a licensed Registered
                    Dietitian Nutritionist (RDN, LDN). She holds a Bachelor of
                    Science degree in Chemistry from Western Carolina University
                    and a Masters of Science and Doctor of Philosophy in
                    Nutrition Science from The University of North Carolina at
                    Greensboro. Dr. Sastre founded the Farm to Clinic (F2C)
                    initiative in 2019 that seeks to partner undeserved and
                    under-resourced patients with healthful food and nutrition
                    and lifestyle medicine/culinary medicine programming to
                    address chronic disease related disparities with a focus on
                    diabetes and hypertension. Her community-engaged,
                    translational research centering around health disparities,
                    food security/social determinants of health, chronic disease
                    prevention and management and healthcare policy with a focus
                    on under-served patient groups.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="../files/dasCV.pdf"
                  target="_blank"
                  variant="contained"
                  download
                >
                  Download CV
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="../images/brandon.JPG"
                alt="Brandon Stroud"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Assistant Director
                </Typography>
                <Typography
                  variant="body"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Brandon Stroud is the Assistant Director of the Farm to Clinic
                  (F2C) initiative. He is a Certified Health Education
                  Specialist and Certified Personal Trainer through the National
                  Academy of Sports Medicine. He holds a Bachelor of Science
                  degree in Nutrition and Dietetics from East Carolina
                  University and will graduate with a Master of Public Health
                  (MPH) in Community Health and Health Behavior from East
                  Carolina University in May 2023. After completion of his MPH,
                  he plans to attend a Doctor of Public Health program, and he
                  would like to utilize his training and experience to conduct
                  healthcare research that has practical implications to improve
                  access and quality of care for underserved populations. He
                  maintains active roles in the Society of Public Health
                  Education and American Public Health Association. Brandon has
                  worked with Dr. Lauren Sastre and the F2C initiative since the
                  Fall of 2019. He began as a general volunteer/undergraduate
                  research assistant and worked his way into a leadership
                  position as the F2C Assistant Director. He has assisted in
                  leading several initiatives through F2C and works very closely
                  with our clinic/community partners, research assistants, and
                  student volunteers. Through his time working with F2C he has
                  been a part of numerous community-engaged research projects,
                  received undergraduate research grants, published a
                  manuscript, and presented F2C-related research at several
                  National, State, and local conferences.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" variant="contained">
                Download CV
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="team-rows">
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="../images/das.jpeg"
                alt="Dr Das"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Lead Consultant & Investigator
                </Typography>
                <Typography
                  variant="body"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Dr. Bhibha M. Das is a public health and physical activity
                  practitioner and researcher with over a decade’s worth of
                  experience in the field. Bhibha is currently an Associate
                  Professor in the Department of Kinesiology at East Carolina
                  University and is a fellow in the American College of Sports
                  Medicine. While at East Carolina University, Dr. Das has
                  received numerous grants and been recognized for her research,
                  teaching, and mentorship activities. During her career, Dr.
                  Das has mentored dozens of students; published numerous
                  articles in the field of physical activity promotion through
                  the lenses of public health; and presented at regional,
                  national, and international conferences.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="../files/dasCV.pdf"
                target="_blank"
                variant="contained"
                download
              >
                Download CV
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="../images/jessica1.jpg"
                alt="Jessica Barrett"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Consultant
                </Typography>
                <Typography
                  variant="body"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Jessica Barrett is a Registered Dietitian Nutritionist for ECU
                  Brody School of Medicine’s Healthier Lives at School and
                  Beyond school-based telehealth program in the Department of
                  Public Health. She provides tele-nutrition counseling to
                  students K-12, faculty, and staff for Duplin County Schools,
                  Jones County Public Schools, and Clinton City Schools in
                  Sampson County. Additionally, she provides home-based
                  telehealth services to patients at Roanoke Chowan Community
                  Health Center in Ahoskie, NC. She completed her bachelor’s
                  degree in Human Nutrition at Winthrop University and has
                  enrolled at ECU for a master’s degree in Public Health. Her
                  mission is to assist in guiding her clients with their
                  nutritional habits to help reduce the likelihood of chronic
                  disease down the road, particularly for those living in rural
                  and under-served communities. Jessica has a passion for
                  cooking and baking and believes strongly that you don’t have
                  to compromise taste when it comes to creating healthier
                  options. Her favorite cuisines/cooking styles are Cuban,
                  Italian, and vegan/plant-based. Some other interests of hers
                  include practicing yoga, strength-training, singing, and
                  spending time with her family.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="team-rows">
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="../images/alessio.JPG"
                alt="Alessio Fratarcangeli"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Farm To Clinic Coordinator
                </Typography>
                <Typography
                  variant="body"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Alessio Fratarcangeli is a Biology Student of the Thomas
                  Harriet College of Arts and Sciences. In 2022, he became the
                  Program Coordinator for the Farm to Clinic (F2C) initiative.
                  Alessio connects and builds relationships with growers,
                  organizations, and clinics across Eastern North Carolina to
                  locate and facilitate volunteer gleanings, pickups, and
                  drop-offs of healthy fruits and vegetables. Primary partners
                  include the North Carolina Associate of Free and Charitable
                  Clinics within Eastern NC, The Society of St. Andrews, and the
                  Central and Eastern Food Bank of North Carolina. He is always
                  looking for more volunteer involvement to accomplish F2C's
                  goal to address disparities and serve overlooked communities
                  here in Eastern NC.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image="../images/brooke.JPG"
                alt="Brooke Gillespie"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Fresh Start Coordinator
                </Typography>
                <Typography
                  variant="body"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Brooke is a senior in the Department of Nutrition Science at
                  East Carolina University. She has been heavily involved within
                  the F2C/Fresh Start program since fall of 2021 and was
                  promoted to a greater leadership role and program coordinator
                  in fall of 2022. After obtaining her Bachelor's, Brooke is
                  pursuing to further her education at East Carolina University
                  by obtaining a master's degree in Nutrition Science as well as
                  completing her dietetic internship to obtain the registered
                  dietitian nutritionist credential and become a licensed
                  nutrition provider. Brooke's clinical and professional
                  interests outside of F2C/Fresh Start include a focus in
                  clinical and community work as well as further serve the
                  under-served community by helping address health disparities.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default MeetTheTeam;
