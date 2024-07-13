// src/HeroSection.js
import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import ImpactFundedBackground from "../../../assets/ImpcatFundedHero.jpg";
import NavBar from '../../../components/NavBar/NavBar';

const BackgroundImage = styled(Box)({
  position: "relative",
  height: "85vh",
  backgroundImage: `url(${ImpactFundedBackground})`,
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
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
const HeroContent = styled(Container)({
  position: "relative",
  zIndex: 1,
});
const ImpactFundedHero = () => {
  return (
    <BackgroundImage>
        <NavBar />
      <Overlay />
      <HeroContent>
        <Typography variant="h3" component="h1" gutterBottom  sx={{ color: "rgb(234, 218, 213)"}}>
          TRAVEL WITH IMPACT: CONTRIBUTE TO COMMUNITY-LED PROJECTS
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          EMPOWER COMMUNITIES TO SUSTAIN LOCAL CULTURES, PROTECT NATURAL HABITATS, AND ENABLE AUTHENTIC CULTURAL EXCHANGES THAT CHANGE LIVES.
        </Typography>
        <Button variant="contained" color="warning" size="large">
          CONTRIBUTE NOW
        </Button>
      </HeroContent>
     
    </BackgroundImage>
  );
};

export default ImpactFundedHero;
