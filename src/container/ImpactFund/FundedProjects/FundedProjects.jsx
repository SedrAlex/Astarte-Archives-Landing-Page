import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import bg1 from "../../../assets/bg1.png";
import bg2 from "../../../assets/bg2.png";
const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: '20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '10px',
    overflow: 'hidden',
    border:"none"

  }));
  
  const CategoryLabel = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    color: '#888',
    textAlign: 'center',
    marginTop: '10px',
  }));
  
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
  }));
  
  const StatusLabel = styled(Button)(({ theme }) => ({
    backgroundColor: '#C3E886',
    color: '#000',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '20px',
    padding: '5px 10px',
    margin: '10px auto',
    display: 'block',
  }));
  
  const ViewProjectButton = styled(Button)(({ theme }) => ({
    color: '#ff9800',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '0 auto',
    display: 'block',
  }));
  
  const ProjectCard = ({ project }) => {
    return (
      <StyledCard>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          border="none"
        />
        <CardContent>
          <CategoryLabel variant="subtitle2">
            {project.category}
          </CategoryLabel>
          <Title variant="h6">
            {project.title}
          </Title>
          <StatusLabel>
Acheived          </StatusLabel>
        </CardContent>
        <CardActions>
          <ViewProjectButton>
            View Project →
          </ViewProjectButton>
        </CardActions>
      </StyledCard>
    );
  };
  
const FundedProjects = () => {
  const projects = [
    {
      image: bg1,
      category: 'ENVIRONMENTAL REGENERATION',
      title: 'Scaling: Adapting Traditional Balinese Irrigation Techniques to Reduce Greenhouse Gas Emissions',
      description: 'Achieved',
    },
    {
      image: 'path/to/image2.jpg',
      category: 'CULTURAL REGENERATION',
      title: 'Creating a Dance Troupe to Revitalize the Jogéd Pingitan, a Traditional Balinese Dance',
      description: 'Achieved',
    },
    {
      image: 'path/to/image3.jpg',
      category: 'CULTURAL REGENERATION',
      title: 'Developing a Children’s Club for Gamelan, an Indonesian Orchestra',
      description: 'Achieved',
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: '#000', padding: '20px' }}>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </Box>
  );
};

export default FundedProjects;
