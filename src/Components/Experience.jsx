import { Box, Grid } from "@mui/material";
import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import styles from "../Styles/home.style";
import { withStyles } from "@mui/styles";

const Experience = (props) => {
  const { classes } = props;

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& .MuiGrid-root": { padding: " 0 15px" },
        }}
        id="experience"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  iste reiciendis facilis
                </p>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Experience);
