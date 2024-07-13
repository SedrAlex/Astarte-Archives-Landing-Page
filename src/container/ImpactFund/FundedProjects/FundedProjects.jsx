import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import bg1 from "../../../assets/acheived1.webp";
import bg2 from "../../../assets/acheived2.jpg";
import bg3 from "../../../assets/Booza.jpg";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: '20px',
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  border: "none",
  display: 'flex',
  flexDirection: 'column',
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
        height="250"
        image={project.image}
        alt={project.title}
        border="none"
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CategoryLabel variant="subtitle2">
          {project.category}
        </CategoryLabel>
        <Title variant="h6">
          {project.title}
        </Title>
        <StatusLabel>
          Achieved
        </StatusLabel>
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
      title: 'Creating a Dance Troupe to Revitalize the Jogéd Pingitan, a Traditional Balinese Dance',
      description: 'Achieved',
    },
    {
      image: bg2,
      category: 'CULTURAL REGENERATION',
      title: 'Creating a Dance Troupe to Revitalize the Jogéd Pingitan, a Traditional Balinese Dance',
      description: 'Achieved',
    },
    {
      image: bg3,
      category: 'CULTURAL REGENERATION',
      title: 'Creating a Dance Troupe to Revitalize the Jogéd Pingitan, a Traditional Balinese Dance',
      description: 'Achieved',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#000', padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
        Funded Projects
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default FundedProjects;
