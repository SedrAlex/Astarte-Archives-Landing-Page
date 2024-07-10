import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
      <Button
        href="#connect"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Connect
      </Button>
      <Button
        href="#about"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        About
      </Button>
      <Button
        href="#experiences"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Experiences
      </Button>
      <Button
        href="#impact-fund"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Impact Fund
      </Button>
      <Button
        href="#museums"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Museums
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ background: "#000", boxShadow: "none" }}>
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
              <Button href="#about" color="inherit" sx={{ mx: 4 }}>
                About
              </Button>
              <Button href="#museums" color="inherit" sx={{ mx: 4 }}>
                Museums
              </Button>
              <Button
                color="inherit"
                sx={{ mx: 4 }}
                onClick={() => {
                  navigate("/experiences");
                }}
              >
                Experiences
              </Button>
              <Button color="inherit" sx={{ mx: 4 }}   onClick={() => {
                  navigate("/impact-fund");
                }}
              >
                Impact Fund
              </Button>
              <Button
                href="#connect"
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
