import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProjectsCard from './ProjectsCard';
import ImpcatFundedHero from "../../../assets/ImpcatFundedHero.jpg";
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useGetImpactFundsQuery } from "../../../redux/apis/clientsApi";
import CustomLoader from "../../../components/CustomLoader/CustomLoader";


const ProjectsToContribute = () => {
  const { data: impactFunds, isLoading, isError, error } = useGetImpactFundsQuery();

  const pendingImpactFunds = impactFunds?.results.filter(
    (impactFund) => impactFund.status !== "completed"
  );

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <Box sx={{ backgroundColor: "#000", padding: "40px" }}>
    <Typography variant="h4" sx={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
      PROJECTS YOU CAN CONTRIBUTE
    </Typography>
    <Grid container spacing={3}>
      {pendingImpactFunds.map((impactFund, index) => {
        const imageUrl = `http://localhost:3000/${impactFund.projects[0].media[0]}`;
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectsCard
               id={impactFund.id}
              title={impactFund.projects[0].name}
              description={impactFund.projects[0].description}
              image={imageUrl}
              currentAmount={impactFund.allocatedAmount}
              targetAmount={impactFund.totalAmount}
            />
          </Grid>
        );
      })}
    </Grid>
  </Box>
  );
}

export default ProjectsToContribute;
