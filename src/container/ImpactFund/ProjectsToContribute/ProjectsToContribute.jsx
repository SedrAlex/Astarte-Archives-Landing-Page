import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProjectsCard from './ProjectsCard';
import ImpcatFundedHero from "../../../assets/ImpcatFundedHero.jpg";
import { Typography } from '@mui/material';

const ProjectsToContribute = () => {
  const projectInfo = [
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
    {
      title: 'CULTURAL REGENERATION',
      description: 'PERFORMING ARTS & MUSIC EDUCATIONAL PROGRAM IN KEDISAN',
      image: ImpcatFundedHero,
      currentAmount: 13000,
      targetAmount: 17600,
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
      PROJECTS YOU CAN CONTRIBUTE
      </Typography>
      <Grid container spacing={3}>
        {projectInfo.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectsCard
              title={project.title}
              description={project.description}
              image={project.image}
              currentAmount={project.currentAmount}
              targetAmount={project.targetAmount}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectsToContribute;
