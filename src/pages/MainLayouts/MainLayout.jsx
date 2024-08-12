import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { NFTPlatformProvider } from "../../Context/NFTPlatformContext";

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
    <NFTPlatformProvider>
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
    </NFTPlatformProvider>
  );
};

export default MainLayout;
