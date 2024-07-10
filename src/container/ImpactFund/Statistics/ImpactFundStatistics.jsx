// src/StatisticalSection.js
import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';

const StatBox = styled(Box)({
  textAlign: 'center',
  color: "rgb(234, 218, 213)",
  padding: '0 60px',
});

const DividerStyled = styled(Divider)({
  backgroundColor: '#fff',
  height: '50px',
  alignSelf: 'center',
});

const ImpactFundStatistics = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        padding: '10px 0',
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <StatBox>
            <Typography variant="h2" component="p">
              +$450K
            </Typography>
            <Typography variant="body2" component="p" sx={{ fontSize: '0.75rem' }}>
              ECONOMIC IMPACT
            </Typography>
          </StatBox>
        </Grid>
        <DividerStyled orientation="vertical" flexItem />
        <Grid item>
          <StatBox>
            <Typography variant="h2" component="p">
              +400K
            </Typography>
            <Typography variant="body2" component="p" sx={{ fontSize: '0.75rem' }}>
              PEOPLE IMPACTED WORLDWIDE
            </Typography>
          </StatBox>
        </Grid>
        <DividerStyled orientation="vertical" flexItem />
        <Grid item>
          <StatBox>
            <Typography variant="h2" component="p">
              12
            </Typography>
            <Typography variant="body2" component="p" sx={{ fontSize: '0.75rem' }}>
              EDUCATION WORKSHOPS
            </Typography>
          </StatBox>
        </Grid>
        <DividerStyled orientation="vertical" flexItem />
        <Grid item>
          <StatBox>
            <Typography variant="h2" component="p">
              14
            </Typography>
            <Typography variant="body2" component="p" sx={{ fontSize: '0.75rem' }}>
              LIVE PROJECTS
            </Typography>
          </StatBox>
        </Grid>
        <DividerStyled orientation="vertical" flexItem />
        <Grid item>
          <StatBox>
            <Typography variant="h2" component="p">
              16
            </Typography>
            <Typography variant="body2" component="p" sx={{ fontSize: '0.75rem' }}>
              COMPLETED PROJECTS
            </Typography>
          </StatBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImpactFundStatistics;
