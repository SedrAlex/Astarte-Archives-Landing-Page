import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme.js";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { router } from "./router/router.jsx";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
