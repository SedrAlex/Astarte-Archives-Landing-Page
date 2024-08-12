import React, { useRef } from 'react';
import { Box, Typography, Grid, Avatar, Tabs, Tab } from '@mui/material';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
 
const ProjectInformation = () => {
  const summaryRef = useRef(null);
  const objectivesRef = useRef(null);
  const overviewRef = useRef(null);

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) {
      summaryRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === 1) {
      objectivesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (newValue === 2) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#fff", p: 4, width: "100%" }}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: "#fff", color: "#000", p: 4, mt: 3 }}>
            <Header handleTabChange={handleTabChange} />
            <div ref={summaryRef}>
              <Details />
              <About />
              <ProjectLeader />
            </div>
            <div ref={objectivesRef}>
              <Objectives />
            </div>
            <div ref={overviewRef}>
              <Overview />
            </div>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <ProjectDetails currentAmount={2000} targetAmount={4000} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Header = ({ handleTabChange }) => (
  <Box borderBottom={1} borderColor="divider">
    <Tabs onChange={handleTabChange} aria-label="basic tabs example">
      <Tab label="SUMMARY" />
      <Tab label="OBJECTIVES" />
      <Tab label="OVERVIEW" />
    </Tabs>
  </Box>
);

const Details = () => (
  <Grid container spacing={2} alignItems="center" style={{ marginTop: 20 }}>
    <Grid item>
      <img src="path/to/people-logo.png" alt="People Involved" style={{ width: 40, height: 40 }} />
    </Grid>
    <Grid item>
      <Typography variant="h4">30</Typography>
      <Typography>People Involved</Typography>
    </Grid>
    <Grid item>
      <img src="path/to/cultural-logo.png" alt="Cultural Restoration" style={{ width: 40, height: 40 }} />
    </Grid>
    <Grid item>
      <Typography variant="h4">01</Typography>
      <Typography>Cultural Restoration</Typography>
    </Grid>
  </Grid>
);

const About = () => (
  <Box mt={4}>
    <Typography variant="h6">ABOUT</Typography>
    <Typography>
      In the heart of Duda Timur, there's a hidden gem high up on a hill — the sacred Pura Pucak Bukit Pintu temple and Sacred Spring Water, playing a unique role as guardian of villages below and its environmental treasures. These symbols of spiritual purity, where the sacred meets spring waters, currently face limited accessibility as well as an inefficient distribution of spring water during ceremonies. To overcome these challenges we plan to restore and create durable stairways, to build a specialized container for efficient water distribution and to build a place for communities ceremonies. This outdoor space highlights the physical, spiritual and cultural significance that courses through this place's history.
    </Typography>
  </Box>
);

const ProjectLeader = () => (
  <Box mt={4}>
    <Typography variant="h6">PROJECT LEADER</Typography>
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Avatar alt="Project Leader" src="https://via.placeholder.com/150" />
      </Grid>
      <Grid item>
        <Typography variant="h6">JRO MANGKU I WAYAN SUDIARTA</Typography>
        <Typography>Project ID: IFP 01 | SEMBAL, TEGALLALANG, BALI</Typography>
      </Grid>
    </Grid>
  </Box>
);

const Objectives = () => (
  <Box mt={4}>
    <Typography variant="h6">OBJECTIVES</Typography>
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography>Restoration of Cultural Heritage</Typography>
      </Grid>
      <Grid item>
        <Typography>Cultural and Environmental Awareness</Typography>
      </Grid>
      <Grid item>
        <Typography>Cultural Continuity</Typography>
      </Grid>
      <Grid item>
        {/* <SkillsIcon fontSize="large" /> */}
        <Typography>Restoration of Cultural Skills</Typography>
      </Grid>
    </Grid>
  </Box>
);

const Overview = () => (
  <Box mt={4}>
    <Typography variant="h6">OVERVIEW</Typography>
    <Typography>
      The objective of this project is to restore and rekindle the sacred Pura Pucak Bukit Pintu temple, nearby the village of Duda Timur, Bali. For generations, Pura Pucak Bukit Pintu has been a place of worship for its local Hindu population of one thousand people. However, the temple is 30 minutes away from the village and accessible only by foot, making it off-bounds for much of the community. As such, significant spiritual ceremonies are not being practiced and risk not being transmitted to the next generation. Quantum Temple aims to restore these ceremonies through a tripartite approach. The first is to connect the community and Pura Pucak Bukit Pintu through building a road, which will in turn facilitate the movement of materials for on-site construction projects. These include the construction of temple platforms, and the restoration of a water spring. This project funds the construction of the road to Pura Pucak Bukit Pintu.
    </Typography>
  </Box>
);

export default ProjectInformation;
