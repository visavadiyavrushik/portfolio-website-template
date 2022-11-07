import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";
import styles from "../Styles/navbar.style";

const Navbar = (props) => {
  const { classes } = props;

  return (
    <>
      {/* <Container> */}
      <div className={classes.navroot}>
        <Box className={classes.nav_links}>
          <div className={classes.nav_linksdiv}>
            <Box className={classes.nav_logo}>
              <a href="#home">
                <h1 className={classes.logo}>Logo</h1>
              </a>
            </Box>
            <ul
              className={classes.nav_linksul}
              //   onClick={handleToggle}
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>

              {/* <li>
                <div>
                  <a href="#1" className="resume">
                    Resume
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </Box>
      </div>
      {/* </Container> */}
    </>
  );
};

export default withStyles(styles)(Navbar);
