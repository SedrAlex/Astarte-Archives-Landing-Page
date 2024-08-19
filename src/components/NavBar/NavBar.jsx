import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { NFTPlatformContext } from "../../Context/NFTPlatformContext";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice"; // Import the logout action

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { currentAccount, connectWallet } = useContext(NFTPlatformContext);
  const user = useSelector((state) => state.user?.user); // Ensure correct state slice
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = async () => {
    if (currentAccount === "") {
      await connectWallet();
    } else {
      navigate("/upload-nft");
    }
  };

  const handleLogin = () => {
    navigate("/sign-in");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Remove auth_token from localStorage
    dispatch(logout()); // Dispatch logout action to update state
    handleClose();
    navigate("/sign-in"); // Redirect to login page
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
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ height: 50, marginBottom: 20, cursor: "pointer" }}
        />
      </Link>
      <Button
        href="#connect"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Connect
      </Button>
      <Button
        href="/"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Home
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
        href="/artifacts"
        sx={{ display: "block", my: 2 }}
        onClick={handleDrawerToggle}
      >
        Artifacts
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ background: "#000", boxShadow: "none" }}>
        <Toolbar>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 50, cursor: "pointer" }}
            />
          </Link>
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
              <Button href="/" color="inherit" sx={{ mx: 4 }}>
                Home
              </Button>
              <Button href="/search-page" color="inherit" sx={{ mx: 4 }}>
                Artifacts
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
              <Button
                color="inherit"
                sx={{ mx: 4 }}
                onClick={() => {
                  navigate("/impact-fund");
                }}
              >
                Impact Fund
              </Button>
              {user && user.role === "admin" &&
                (currentAccount === "" ? (
                  <Button
                    onClick={handleClick}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      borderRadius: "112px",
                      mx: 1.5,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.9,
                      },
                    }}
                  >
                    Connect
                  </Button>
                ) : (
                  <Button
                    onClick={handleClick}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      borderRadius: "112px",
                      mx: 1.5,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.9,
                      },
                    }}
                  >
                    Create
                  </Button>
                ))}
              {user ? (
                <>
                  <Typography variant="h6" sx={{ mx: 2 }} color="inherit">
                    Hello {user.role === "admin" ? "Admin" : user.name}
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  onClick={handleLogin}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    borderRadius: "112px",
                    mx: 1.5,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      opacity: 0.9,
                    },
                  }}
                >
                  Login
                </Button>
              )}
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
