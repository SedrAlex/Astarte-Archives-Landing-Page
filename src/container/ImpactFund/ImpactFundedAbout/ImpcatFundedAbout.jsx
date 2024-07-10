import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import bg1 from "../../../assets/bg1.png";
import bg2 from "../../../assets/bg2.png";

const ImpactFundedAbout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#000',
        color: "rgb(234, 218, 213)",
        padding: '20px 20px',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        ABOUT THE IMPACT FUND
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '40px', maxWidth: '800px', fontSize: '18px', lineHeight: '1.6' }}>
       Arstrate-Archeives Impact Fund is a unique initiative allowing travelers and institutions to directly and transparently support projects focusing on cultural heritage preservation, environmental conservation, and the creation of community-led tourism experiences.
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            src={bg1}
            alt="Image 1"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            src={bg2}
            alt="Image 2"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImpactFundedAbout;
