import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { router } from "./router/router.jsx";
import { CssBaseline } from "@mui/material";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
