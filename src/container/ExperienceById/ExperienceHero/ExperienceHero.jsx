// src/components/HeroSection.js
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NavBar from '../../../components/NavBar/NavBar';

const BackgroundImage = styled(Box)(({ image }) => ({
  backgroundImage: `url(${image})`, // Use the image prop
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  color: '#fff',
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const OrangeButton = styled(Button)({
  backgroundColor: '#ff7f00',
  color: '#fff',
  borderRadius: '20px',
  padding: '10px 20px',
  marginTop: '10px',
  '&:hover': {
    backgroundColor: '#e67300',
  },
});

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
};

const ExperienceHero = ({ tour }) => {
  const { title, registrationStartDate, registrationEndDate, media } = tour;
  const imageUrl = `http://localhost:3000/${media[0]}`; // Assuming media[0] contains the image path

  // Format the dates
  const formattedStartDate = formatDate(registrationStartDate);
  const formattedEndDate = formatDate(registrationEndDate);

  return (
    <BackgroundImage image={imageUrl}>
        <NavBar />
      <Overlay />
      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
        📍 {formattedStartDate} - {formattedEndDate}
        </Typography>
        {/* <OrangeButton variant="contained">BOOK EXPERIENCE →</OrangeButton> */}
      </Container>
    </BackgroundImage>
  );
};

export default ExperienceHero;


