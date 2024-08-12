import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "../../../components/NavBar/NavBar";
const ProjectHero = () => {
  return (
    <HeroContainer>
      <NavBar />

      <Content>

      <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 20px",
            backgroundColor: "#FEC879",
            color: "#000",
            borderRadius: "20px",
            marginRight: "5px",
            marginTop: "20px",
          }}
        >
          NEEDS FUNDING
        </Typography>
        <Typography variant="h1" component="h1" gutterBottom>
          Traiditonal Food  Renewal Phase I
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
        Cultural Regeneration
        </Typography>
      </Content>
    </HeroContainer>
  );
};

export default ProjectHero;

const HeroContainer = styled(Box)(({ theme }) => ({
  height: "50vh",
  backgroundImage:
    "url(https://quantumtemple.xyz/_next/image?url=https%3A%2F%2Fd3ew556gdf3fcf.cloudfront.net%2Fprojects%2F11_renovating-pura-pucak-bukit-pintu-temple-road-accessibility%2Fimages%2F1.cover.jpg&w=1920&q=75)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));
