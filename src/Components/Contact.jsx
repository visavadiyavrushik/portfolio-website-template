import React from "react";
import { withStyles } from "@mui/styles";
import styles from "../Styles/home.style";
// import { Container } from "@mui/system";
import {
  Box,
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Contact = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} id="contact">
      {/* <Box className={classes.ColorBlock}></Box> */}
      <Box className={classes.TitleSection}>
        <h1>
          Get in&nbsp;
          <span style={{ color: "#ffb400" }}>Touch</span>
        </h1>
        <span className={classes.TitleSectionspan}>Contact</span>
      </Box>
      <Container>
        <Grid container className={classes.ContactGrid}>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.ContactFirstGrid}
            sx={{ padding: "0 15px" }}
          >
            <h3 className={classes.custom_title}>Don't be shy !</h3>
            <p className={classes.contact_p}>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <p className={classes.Custom_span_contact}>
              <HomeRoundedIcon />
              <span>Address Point</span>
              123 Stree New York City , United States Of America 750065.
            </p>
            <p className={classes.Custom_span_contact}>
              <EmailRoundedIcon />
              <span>mail me</span>
              <a href="mailto:steve@mail.com" style={{ cursor: "none" }}>
                steve@mail.com
              </a>
            </p>
            <p className={classes.Custom_span_contact}>
              <CallRoundedIcon />
              <span>call me</span>
              +216 21 184 010
            </p>
            <ul className={classes.social}>
              <li>
                <a href="#1">
                  <FacebookRoundedIcon />
                </a>
              </li>
              <li>
                <a href="#2">
                  <FacebookRoundedIcon />
                </a>
              </li>
              <li>
                <a href="#3">
                  <FacebookRoundedIcon />
                </a>
              </li>
              <li>
                <a href="#4">
                  <FacebookRoundedIcon />
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} lg={8} sx={{ padding: "0 15px" }}>
            <form className={classes.contactform}>
              <Grid container sx={{ margin: "25px 10px" }}>
                <Grid item xs={12} md={6}>
                  <TextField type="text" name="name" placeholder="YOUR NAME" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type="text"
                    name="subject"
                    placeholder="YOUR SUBJECT"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="name"
                    placeholder="YOUR SUBJECT"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    maxRows={10}
                    placeholder="YOUR MESSAGE"
                    // style={{ width: 200 }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ margin: "20px" }}>
                  <Button className={classes.Btn}>
                    <span className={classes.BtnSpan}>Send Message</span>
                    <span className={classes.BtnIcon}>
                      <ArrowForwardOutlinedIcon />
                    </span>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Contact);
