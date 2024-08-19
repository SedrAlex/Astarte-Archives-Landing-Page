import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ExperiencesBackground from "../../../assets/ExperincesBackground.jpg";
import NavBar from "../../../components/NavBar/NavBar";

const HeroContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  backgroundImage: `url(${ExperiencesBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "rgb(234, 218, 213)",
  textAlign: "center",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 1,
});

const ExperiencesHero = ({ yearlyRef, seasonlyRef, upcominglyRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroContainer>
      <NavBar />
      <Overlay />
      <HeroContent>
        <Typography variant="h2" component="h1" gutterBottom>
          Resdicover Syria
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Authentic Experiences Supporting Local Communities
        </Typography>
        <Box mt={4}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ margin: 1 }}
            onClick={() => scrollToSection(yearlyRef)}
          >
            Year-Round Experiences
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ margin: 1 }}
            onClick={() => scrollToSection(seasonlyRef)}
          >
            Seasonal Events
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ margin: 1 }}
            onClick={() => scrollToSection(upcominglyRef)}
          >
            Upcoming Experiences
          </Button>
        </Box>
      </HeroContent>
    </HeroContainer>
  );
};

export default ExperiencesHero;
