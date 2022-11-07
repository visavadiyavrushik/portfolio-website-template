import { Box, Button, Grid, Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";
import styles from "../Styles/home.style";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const PersonalInfo = (props) => {
  const { classes } = props;
  return (
    <>
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
        <Grid item xs={12} md={6} sx={{ padding: "0 15px" }}>
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
              // xs={4}

              // sx={{ "& ": { padding: "0 15px" } }}
            >
              <Box className={classes.aboutBoxes}>
                <h3>12</h3>
                <p>
                  years of <span>experience</span>
                </p>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              // xs={4}
            >
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
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(PersonalInfo);
