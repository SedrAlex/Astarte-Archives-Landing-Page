import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const ProjectHero = () => {
  return (
    <HeroContainer>
      <Content>
        <Typography variant="h1" component="h1" gutterBottom>
          Balinese Temple Renewal Phase I
        </Typography>
        <Button variant="contained" color="primary">
          Needs Funding
        </Button>
      </Content>
    </HeroContainer>
  );
};

export default ProjectHero;

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundImage: 'url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
}));

const Content = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));
