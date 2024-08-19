import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "../../../components/NavBar/NavBar";

const ProjectHero = ({ project }) => {
  const statusText = project?.status === "pending" ? "NEEDS FUNDING" : "ACHIEVED";
  const statusColor = project?.status === "pending" ? "#FEC879" : "#C3E886";
  const imageUrl = `http://localhost:3000/${project?.projects[0]?.media[0]}`;
console.log(project.status);
  return (
    <HeroContainer imageUrl={imageUrl}>
      <NavBar />
      <Content>
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 20px",
            backgroundColor: statusColor,
            color: "#000",
            borderRadius: "20px",
            marginRight: "5px",
            marginTop: "10px",
            marginBottom: "10px",

          }}
        >
          {statusText}
        </Typography>
        <Typography variant="h1" component="h1" gutterBottom>
          {project?.projects[0]?.name}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          Cultural Regeneration
        </Typography>
      </Content>
    </HeroContainer>
  );
};

export default ProjectHero;

const HeroContainer = styled(Box)(({ theme, imageUrl }) => ({
  height: "50vh",
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));
