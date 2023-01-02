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
                    Department of Nutrition Science. She is a licensed
                    Registered Dietitian Nutritionist (RDN, LDN) and holds a
                    Bachelor of Science degree in Chemistry from Western
                    Carolina University and a Masters of Science and Doctor of
                    Philosophy in Nutrition Science from The University of North
                    Carolina at Greensboro.Dr. Sastre founded the Farm to Clinic
                    (F2C) initiative in 2019 that seeks to partner undeserved
                    and under-resourced patients with healthful food and
                    nutrition and lifestyle medicine/culinary medicine
                    programming to address chronic disease related disparities
                    with a focus on diabetes and hypertension. Her primary
                    community partnerships include the North Carolina
                    Association of Free and Charitable Clinics within Eastern
                    NC, The Society of St. Andrews, the Central and Eastern Food
                    Bank of North Carolina. She directs several initiatives
                    through F2C, mentor’s students across a range of disciplines
                    and is always looking for a new energetic student to join
                    her team to make an impact! Since arriving to ECU she has
                    received several grants (intramural and extramural) and been
                    recognized for mentorship of students and as well as for her
                    research. She maintains active roles in the American Public
                    Health Association and the Academy of Nutrition and
                    Dietetics and regularly presents and publishes her
                    community-engaged, translational research centering around
                    health disparities food security, social determinants of
                    health, and chronic disease management through a variety of
                    platforms.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
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
                  experience in the field. Prior to joining academia, she spent
                  four years working with communities, including underserved and
                  rural ones to develop, implement, and evaluate physical
                  activity promotion programs and policies. Part of Dr. Das’s
                  transition from practitioner to researcher was to bridge the
                  gap between practice and research. Dr. Das’s research agenda
                  focuses on physical activity promotion as the cornerstone for
                  improvements in quality of life in worksites and underserved
                  populations. After earning degrees in public health and
                  kinesiology from the University of Illinois and completing
                  post-doctoral training at the University of Georgia, Bhibha is
                  currently an Associate Professor in the Department of
                  Kinesiology at East Carolina University and is a fellow in the
                  American College of Sports Medicine. While at East Carolina
                  University, Dr. Das has received numerous grants and been
                  recognized for her research, teaching, and mentorship
                  activities. Dr. Das also serves on the Executive Board of the
                  Southeast American College of Sports Medicine and on the
                  American College of Sports Medicine’s Communications and
                  Public Relations Committee. In her free time, Bhibha enjoys
                  playing trivia, reading, and being physically active.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
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
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
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
                  East Carolina University. After obtaining her Bachelor's,
                  Brooke is pursuing to further her education at East Carolina
                  University by obtaining a master's degree in Nutrition Science
                  as well as completing her dietetic internship to obtain the
                  registered dietitian nutritionist credential and become a
                  licensed nutrition provider. Her previous degrees include an
                  Associate's in Pre-Science. Since arriving at ECU, Brooke has
                  been heavily involved within the F2C/Fresh Start program and
                  first began by developing recipes and nutrition education
                  materials that were tailored for the unique, rural,
                  under-served patients the program supports. She moved from
                  this volunteer work developing materials in the fall of 2021
                  to a paid research assistant position in the spring of 2021
                  during which she took on greater roles and responsibilities
                  including managing student health coaches, providing direct
                  health coaching support to patients, and "behind" the scenes
                  administrative tasks which included patient communication and
                  preparation of materials/supplies for on-site group class
                  delivery. Brooke continued working with the program and in
                  fall of 2022 as a health coach navigator in a pilot course to
                  train student health coaches to work with the program and she
                  was also promoted to a greater leadership role and program
                  coordinator in fall of 2022. Her new role will include
                  coordinating and managing the health coaches as well as
                  providing support and leadership among other areas of program
                  delivery and implementation. Brooke is especially passionate
                  about delivering quality, individualized care to each patient
                  we serve in the program and equipping new volunteers, interns,
                  and student research assistants to do this well. Brooke will
                  also be representing the program with upcoming presentations
                  including a Spring 2023 presentation at the Eastern AHEC's
                  2023 Rural Health Symposium Innovations Session highlighting
                  the Fresh Start Program. Brooke's clinical and professional
                  interests outside of F2C/Fresh Start include becoming a
                  Registered Dietitian Nutritionist with a focus in clinical and
                  community work as well as further serve the under-served
                  community by helping address health disparities.
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
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default MeetTheTeam;
