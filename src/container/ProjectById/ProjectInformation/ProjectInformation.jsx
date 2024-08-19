import React, { useRef } from "react";
import { Box, Typography, Grid, Avatar, Tabs, Tab } from "@mui/material";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import peopleInvolved from "../../../assets/people_icon.svg";
import cultureResoloution from "../../../assets/culture2.svg";
import Heritage from "../../../assets/culture3.svg";
import Continuity from "../../../assets/culture4.svg";
import Leader from "../../../assets/Jose-Saramago.webp";

const ProjectInformation = ({ project }) => {
  const summaryRef = useRef(null);
  const objectivesRef = useRef(null);
  const overviewRef = useRef(null);

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 1) {
      objectivesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 2) {
      overviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#fff", p: 4}}>
      <Grid container spacing={2}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: "#fff", color: "#000", p: 4, mt: 3 }}>
            <Header handleTabChange={handleTabChange} />
            <div ref={summaryRef}>
              <Details project={project}/>
              <About />
              <ProjectLeader project={project} />
            </div>
            <div ref={objectivesRef}>
              <Objectives />
            </div>
            <div ref={overviewRef}>
              <Overview project={project} />
            </div>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <ProjectDetails project={project} />
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

const Details = ({project}) => (
  <Grid container spacing={2} alignItems="center" style={{ marginTop: 20 }}>
    <Grid item>
      <img
        src={peopleInvolved}
        alt="People Involved"
        style={{ width: 40, height: 40 }}
      />
    </Grid>
    <Grid item>
      <Typography variant="h4">{project?.donors?.length}</Typography>
      <Typography>People Involved</Typography>
    </Grid>
    <Grid item>
      <img
        src={cultureResoloution}
        alt="Cultural Restoration"
        style={{ width: 40, height: 40 }}
      />
    </Grid>
    <Grid item>
      <Typography variant="h5">
        {project.projects[0].isEducational ? 'Educational' : 'Preserving Heritage'}
      </Typography>
      <Typography>Cultural Restoration</Typography>
    </Grid>
  </Grid>
);

const About = () => (
  <Box mt={4}>
   <Typography variant="h6">ABOUT SYRIAN HISTORY AND CIVILIZATION</Typography>
    <Typography>
      Syria, a land of ancient civilizations, has a rich history that dates back to the earliest human settlements. 
      From the ancient city of Ebla to the grandeur of Palmyra, Syria has been a crossroads of cultures and empires. 
      The country's historical significance is reflected in its diverse architectural heritage, including Roman theaters, 
      Byzantine churches, and Islamic mosques. Despite recent challenges, efforts are being made to preserve and restore 
      these cultural treasures, ensuring that future generations can appreciate Syria's profound historical and cultural legacy.
    </Typography>
  </Box>
);

const ProjectLeader = ({ project }) => (
  <Box mt={4}>
    <Typography variant="h6">PROJECT LEADER</Typography>
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Avatar alt="Project Leader" src={Leader} />
      </Grid>
      <Grid item>
        <Typography variant="h6">DR.AHMAD DAWOOD</Typography>
        <Typography>Project ID: SCP {project?.id} | {project.projects[0]?.location}</Typography>
      </Grid>
    </Grid>
  </Box>
);

const Objectives = () => (
  <Box mt={4}>
    <Typography variant="h6">OBJECTIVES</Typography>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6} md={3}>
        <Grid container direction="column" alignItems="center">
          <img
            src={Heritage}
            alt="Restoration of Cultural Heritage"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography align="center">
            Restoration of Cultural Heritage
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid container direction="column" alignItems="center">
          <img
            src={peopleInvolved}
            alt="Cultural and Environmental Awareness"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography align="center">
            Cultural and Environmental Awareness
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid container direction="column" alignItems="center">
          <img
            src={Continuity}
            alt="Cultural Continuity"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography align="center">Syrian History and Cultural Continuity</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid container direction="column" alignItems="center">
          <img
            src={cultureResoloution}
            alt="Restoration of Cultural Skills"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography align="center">Restoration of Cultural Skills and Preservation</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

const Overview = ({project}) => (
  <Box mt={4}>
    <Typography variant="h6">OVERVIEW</Typography>
    <Typography>
    {project.projects[0]?.description}
    </Typography>
  </Box>
);

export default ProjectInformation;
