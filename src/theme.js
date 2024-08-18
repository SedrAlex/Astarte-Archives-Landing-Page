import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B56C32",
      contrastText: "#ffffff", // ensures text is white when the background is the primary color
    },
    secondary: {
      main: "#000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
    button: {
      main: "#F6872F",
    },
  },
  typography: {
    fontFamily: "IBM Plex Mono, Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // example of overriding button border radius
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${"#e0e0e0"}`,
        },
      },
    },
  },
});

export default theme;
