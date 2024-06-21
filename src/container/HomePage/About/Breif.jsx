import React from "react";

import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import BreifImage from "../../../assets/BreifImage.jpeg";
const ImageContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    "& img": {
      transform: "scale(1.1)",
    },
  },
  boxShadow: `
    0 0 8px rgba(181, 108, 50, 0.6),
    0 0 16px rgba(181, 108, 50, 0.6),
    0 0 24px rgba(181, 108, 50, 0.8),
    0 0 32px rgba(0,0,0,1)
  `, // Layered shadow for a more pronounced glow
  width: "80vw", // Adjusted to 80% of the viewport width
  height: "60vh", // Adjusted to 60% of the viewport height
  margin: "auto", // Centers the container horizontally
  borderRadius: theme.shape.borderRadius, // Smoothens the edges
}));

const StyledImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  width: "100%", // Ensures the image fills the container
  height: "100%", // Ensures the image fills the adjusted container height
  objectFit: "cover", // Ensures the image covers the area without distorting aspect ratio
});
const Breif = () => {
  return (
    <Box
      id="about"
      sx={{
        width: "100%",
        padding: 1,
        bgcolor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "70vh",
      }}
    >
      <ImageContainer elevation={0}>
        <StyledImage src={BreifImage} alt="Dynamic Image" />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            color: "common.white",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              padding: "8px",
              borderRadius: "4px",
              display: "inline-block",
              margin: "20px 0",
            }}
          >
            What is Astarte Archives?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              textIndent: "20px",
              marginTop: "20px",
              padding: "8px",
              borderRadius: "4px",
              fontSize: "1.4rem",
              color: "rgb(234, 218, 213)",
            }}
          >
            Astarte Archives is a pioneering NFT platform dedicated to the
            preservation and celebration of Syrian culture and heritage.
            Utilizing cutting-edge blockchain technology, Astarte Archives not
            only safeguards museum artifacts by transforming them into
            Non-Fungible Tokens (NFTs) but also enhances global access to these
            cultural treasures.
          </Typography>
        </Box>
      </ImageContainer>
    </Box>
  );
};

export default Breif;
