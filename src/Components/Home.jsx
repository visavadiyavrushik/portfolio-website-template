import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../Styles/home.style";
// import { Container } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import image from "../assets/dark.jpg";
import imgresponsive from "../assets/profileresponsive.jpg";
import Navbar from "./Navbar";

const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} id="home">
      <Navbar />
      {/* <Box className={classes.ColorBlock}></Box> */}

      <Grid container className={classes.mainBox}>
        <Grid
          item
          md={4}
          className={classes.firstBox}
          sx={{ backgroundImage: `url(${image})` }}
        ></Grid>

        <Grid item md={8} className={classes.secondGrid}>
          <Box className={classes.secondBox}>
            <img src={imgresponsive} alt="pic" />

            <h1>
              I'M JOHN DOE.
              <span> WEB DESIGNER</span>
            </h1>
            <p>
              {/* I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me. */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              blanditiis eius maxime, recusandae distinctio optio delectus eum
              voluptates assumenda voluptate velit cupiditate ea? Illo
              cupiditate nam beatae nostrum pariatur impedit?
            </p>
            <Button className={classes.Btn}>
              <span className={classes.BtnSpan}>More About Me</span>
              <span className={classes.BtnIcon}>
                <ArrowForwardOutlinedIcon />
              </span>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Home);
