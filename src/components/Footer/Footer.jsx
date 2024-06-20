import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Logo from "../../assets/logo.png"; // Adjust the path as necessary
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#000", // Set your desired background color
        borderTop: "1px solid #ccc", // Optional border
      }}
    >
      <IconButton sx={{ ml: "auto" }}>
        <img src={Logo} alt="Logo" style={{ height: 50 }} />
      </IconButton>
      <Typography variant="body1" sx={{ flexGrow: 1, textAlign: "center" }}>
        © {new Date().getFullYear()} Astarte Archives. All Rights Reserved.
      </Typography>
      <Box>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: "#B56C32" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "#B56C32" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "#B56C32" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
