import React from "react";
import styles from "../Styles/home.style";
import { withStyles } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  LinearProgress,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// import LinearProgress from '@mui/material/LinearProgress';

// import "aos";
import Contact from "./Contact";
// import AppWidget from "./Chart";
import ApexChart from "./ApexChart";

const About = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* <div class="aos-init aos-animate"> */}
      <Box className={classes.TitleSection}>
        <h1>
          About&nbsp;
          <span style={{ color: "#ffb400" }}>Me</span>
        </h1>
        <span className={classes.TitleSectionspan}>Resume</span>
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack spacing={3} className={classes.FirstBoxStack}>
              <Grid item xs={12}>
                <h3>personal infos</h3>
              </Grid>
              <Grid item xs={12}>
                <ul className={classes.PresonalInfoUl}>
                  <li>
                    <span className={classes.infoTitle}>First Name: </span>
                    <span className={classes.spanTitleAns}>Steve</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Last Name: </span>
                    <span className={classes.spanTitleAns}>Milner</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Age: </span>
                    <span className={classes.spanTitleAns}>27 Years</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Nationality: </span>
                    <span className={classes.spanTitleAns}>Tunisian</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Freelance: </span>
                    <span className={classes.spanTitleAns}>Available</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Address: </span>
                    <span className={classes.spanTitleAns}>Tunis</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Phone: </span>
                    <span className={classes.spanTitleAns}>+25856262665</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Email: </span>
                    <span className={classes.spanTitleAns}>Steve@mail.com</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Skype: </span>
                    <span className={classes.spanTitleAns}>Steve.mail</span>
                  </li>
                  <li>
                    <span className={classes.infoTitle}>Languages: </span>
                    <span className={classes.spanTitleAns}>English</span>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.Btn}>
                  <span className={classes.BtnSpan}>Download CV</span>
                  <span className={classes.BtnIcon}>
                    <ArrowForwardOutlinedIcon />
                  </span>
                </Button>
              </Grid>
            </Stack>
          </Grid>
          <Grid item md={6} sx={{ padding: "0 15px" }}>
            {/* <Stack spacing={3}> */}
            <Grid
              container
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "&.MuiGrid-root": {},

                "& .MuiGrid-root": {
                  padding: "0 15px",
                  maxWidth: "100%",
                  // flex: "0 0 auto",
                  // width: "50%",
                },
              }}
            >
              <Grid
                item
                md={6}

                // sx={{ "& .MuiGrid-root": { padding: "0 15px" } }}
              >
                <Box className={classes.aboutBoxes}>
                  <h3>12</h3>
                  <p>
                    years of <span>experience</span>
                  </p>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.aboutBoxes}>
                  <h3>97</h3>
                  <p>
                    COMPLETED
                    <span>PROJECTS</span>
                  </p>
                </Box>
              </Grid>

              <Grid item md={6}>
                <Box className={classes.aboutBoxes}>
                  <h3>12</h3>
                  <p>
                    years of <span>experience</span>
                  </p>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.aboutBoxes}>
                  <h3>97</h3>
                  <p>
                    COMPLETED
                    <span>PROJECTS</span>
                  </p>
                </Box>
              </Grid>
            </Grid>
            {/* </Stack> */}
          </Grid>
        </Grid>
        <Divider />

        {/* My Skills start  */}
        {/* <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& .MuiGrid-root": { padding: " 0 15px" },
            }}
          >
            <Grid
              item
              xs={12}
              sx={{ "&.MuiGrid-root": { flex: "0 0 auto", width: "100%" } }}
              className={classes.skillTitle}
            >
              <h3>My Skills</h3>
            </Grid>
            <Grid item xs={6} md={3} mb={3} mb-sm={5}>
              <Box className={classes.circularBox}>
                {" "}
                <CircularProgressWithLabel value={99} />
                <h3>HTML</h3>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} mb={3} mb-sm={5}>
              <Box className={classes.circularBox}>
                {" "}
                <CircularProgressWithLabel value={99} />
                <h3>HTML</h3>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} mb={3} mb-sm={5}>
              <Box className={classes.circularBox}>
                {" "}
                <CircularProgressWithLabel value={99} />
                <h3>HTML</h3>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} mb={3} mb-sm={5}>
              <Box className={classes.circularBox}>
                {" "}
                <CircularProgressWithLabel value={99} />
                <h3>HTML</h3>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} mb={3} mb-sm={5}>
              <Box className={classes.circularBox}>
                {" "}
                <CircularProgressWithLabel value={99} />
                <h3>HTML</h3>
              </Box>
            </Grid>
          </Grid> */}
        {/* My Skills End */}

        {/* My skills 2nd */}
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& .MuiGrid-root": { padding: " 0 15px" },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{ "&.MuiGrid-root": { flex: "0 0 auto", width: "100%" } }}
            className={classes.Titles}
          >
            <h3>My Skills</h3>
          </Grid>
          <Grid item xs={12} className={classes.chartsGrid}>
            {/* <ul className={classes.PresonalInfoUl}>
              <li>
                <div className={classes.spanTitle}>
                  <div style={{}} className={classes.spandiv}>
                    <p>HTML : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li>
                <div className={classes.spanTitle}>
                  <div className={classes.spandiv}>
                    <p>CSS : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li>
                <div className={classes.spanTitle}>
                  <div className={classes.spandiv}>
                    <p>Javascript : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li>
                <div className={classes.spanTitle}>
                  <div className={classes.spandiv}>
                    <p>ReactJs : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li>
                <div className={classes.spanTitle}>
                  <div className={classes.spandiv}>
                    <p>Redux : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
              <li>
                <div className={classes.spanTitle}>
                  <div className={classes.spandiv}>
                    <p>Git : </p>
                    <LinearProgress variant="determinate" value={50} />{" "}
                  </div>
                  <span>50%</span>
                </div>
              </li>
            </ul> */}
            {/* <ul className={classes.PresonalInfoUl}> */}
            {/* <li> */}
            <ApexChart chartData={48} title="HTML" />
            {/* </li> */}
            {/* <li> */}
            <ApexChart chartData={80} title="CSS" />
            <ApexChart chartData={70} title="Javascript" />

            <ApexChart chartData={8} title="ReactJS" />

            {/* <ApexChart chartData={8} title="Redux" /> */}

            {/* </li> */}
            {/* </ul> */}
          </Grid>
        </Grid>
        {/* My Skill 2nd  */}
        <Divider />
        {/* Experience & Education */}
        <Grid
          container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& .MuiGrid-root": { padding: " 0 15px" },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{ "&.MuiGrid-root": { flex: "0 0 auto", width: "100%" } }}
            className={classes.Titles}
          >
            <h3>Experience & Education</h3>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.resume_box}>
              <ul>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.resume_box}>
              <ul>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
                <li>
                  <div className={classes.Icon}>
                    <BusinessCenterIcon />
                  </div>
                  <span className={classes.time}>2018 - Present</span>
                  <h5>
                    Web Developer <span className={classes.place}>Envato</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae iste reiciendis facilis
                  </p>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Contact />
      {/* </div> */}
    </div>
  );
};

export default withStyles(styles)(About);
