import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const theme = useTheme();
  const location = useLocation();

  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* {!hide && <NavBar />} */}
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
