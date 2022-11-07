import React from "react";
import styles from "../Styles/home.style";
import { withStyles } from "@mui/styles";
import { Box, Container, Divider, Grid } from "@mui/material";
import Contact from "./Contact";
import ApexChart from "./ApexChart";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

const About = (props) => {
  const { classes } = props;
  return (
    <section id="about">
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
          <PersonalInfo />
          <Divider />

          {/* My skills  */}
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
            <Grid item xs={4} md={12} className={classes.chartsGrid}>
              <ApexChart chartData={48} title="HTML" />

              <ApexChart chartData={80} title="CSS" />
              <ApexChart chartData={70} title="Javascript" />

              <ApexChart chartData={8} title="ReactJS" />

              {/* <ApexChart chartData={8} title="Redux" /> */}
            </Grid>
          </Grid>
          {/* My Skill 2nd  */}
          <Divider />

          {/* Experience & Education */}
          <Experience />
        </Container>
        <Contact />
      </div>
    </section>
  );
};

export default withStyles(styles)(About);
