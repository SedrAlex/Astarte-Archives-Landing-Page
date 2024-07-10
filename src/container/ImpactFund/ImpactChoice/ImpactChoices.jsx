import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ImpactChoices = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', padding: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        YOUR IMPACT, YOUR CHOICE
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            1. SELECT AMOUNT
          </Typography>
          <Typography variant="body1" align="center">
            SELECT THE CONTRIBUTION AMOUNT THAT BEST SUITS YOU
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            2. CHOOSE PROJECTS
          </Typography>
          <Typography variant="body1" align="center">
            CHOOSE THE PROJECTS ALIGNED WITH YOUR PASSIONS & VALUES
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" align="center">
            3. EARN REWARDS
          </Typography>
          <Typography variant="body1" align="center">
            YOUR CONTRIBUTION UNLOCKS CULTURAL EXPERIENCES & PRODUCTS
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImpactChoices;
