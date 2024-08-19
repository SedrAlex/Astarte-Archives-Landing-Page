import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import backgroundImage from "../../../assets/impact.webp"; // Update the path as needed
import { useNavigate } from "react-router-dom";

const BackgroundBox = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  padding: "20px",
});

const GlowingTypography = styled(Typography)({
  textShadow: "0 0 10px rgba(255, 127, 0, 0.8)", // Adjust the glow effect as needed
});

const ImpactSection = () => {
  const navigate = useNavigate()

  return (
    <BackgroundBox>
      <GlowingTypography variant="h4" gutterBottom color="rgb(234, 218, 213)">
        FOSTER POSITIVE CHANGE ON YOUR JOURNEY
      </GlowingTypography>
      <Typography
        variant="h6"
        gutterBottom
        color="rgb(234, 218, 213)"
        maxWidth={700}
      >
        Every booking becomes a step towards vibrant and sustainable
        destinations. With Arstrate-Archeives, you nurture local artisans, small
        businesses, and cultural and environmental renewal.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF7F00", // Adjust the color as needed
          color: "black",
          borderRadius: "20px",
          padding: "10px 20px",
          marginTop: "20px",
          "&:hover": {
            backgroundColor: "#FF7F00",
          },
        }}
        onClick={() => navigate(`/impact-fund/`)}

      >
        SUPPORT OUR IMPACT PROJECTS →
      </Button>
    </BackgroundBox>
  );
};

export default ImpactSection;
