// src/StatisticalSection.js
import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useGetStasticsQuery } from '../../../redux/apis/clientsApi';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';

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
  const { data: statistics, isLoading, isError, error } = useGetStasticsQuery();
 console.log(statistics);
 if (isLoading){
  return <CustomLoader />;

 }
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
              +${statistics?.economicImpact}
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
              +{statistics?.peopleImpacted}
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
              {statistics?.educationals}
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
              {statistics?.liveProjects}
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
             {statistics?.completedProjects}
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
