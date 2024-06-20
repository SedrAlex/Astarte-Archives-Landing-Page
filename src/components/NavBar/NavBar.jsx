import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logo.png";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [connectToggled, setConnectToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track if the navbar is scrolled
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleConnectToggle = () => {
    setConnectToggled(!connectToggled);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.main,
        padding: "20px 0", // Add vertical padding to the drawer
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: theme.palette.secondary.contrastText,
        }}
      >
        <CloseIcon />
      </IconButton>
      <img src={Logo} alt="Logo" style={{ height: 50, marginBottom: 20 }} />
      <Button sx={{ display: "block", my: 2 }} onClick={handleConnectToggle}>
        Connect
      </Button>
      <Button sx={{ display: "block", my: 2 }}>About</Button>
      <Button sx={{ display: "block", my: 2 }}>Experiences</Button>
      <Button sx={{ display: "block", my: 2 }}>Impact Fund</Button>
      <Button sx={{ display: "block", my: 2 }}>Collection</Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        // position="fixed"
        sx={{ background: "#000", boxShadow: "none" }}
      >
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: 50 }} />
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              <Button color="inherit" sx={{ mx: 4 }}>
                About
              </Button>
              <Button color="inherit" sx={{ mx: 4 }}>
                Collections
              </Button>
              <Button color="inherit" sx={{ mx: 4 }}>
                Experiences
              </Button>
              <Button color="inherit" sx={{ mx: 4 }}>
                Impact Fund
              </Button>
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  borderRadius: "112px",
                  mx: 1.5,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main, // Maintain the background color on hover
                    opacity: 0.9,
                  },
                }}
              >
                Connect
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100vw" },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
