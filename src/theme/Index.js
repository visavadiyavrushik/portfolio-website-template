import { createTheme } from "@mui/material/styles";

const AppThemes = createTheme({
  primary: "#111111",
  secondary: "#ffb912",

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-root": {
            maxWidth: "1366px ",
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          "@media (max-width: 1366px)": {
            "&.MuiContainer-root": {
              paddingLeft: 32,
              paddingRight: 32,
            },
          },
          "@media (max-width: 1024px)": {
            "&.MuiContainer-root": {
              // maxWidth: 'calc(100% - 64px )'
            },
          },
          "@media (max-width: 767px)": {
            "&.MuiContainer-root": {
              paddingLeft: 16,
              paddingRight: 16,
            },
          },
        },
      },
    },
  },
});

export default AppThemes;
