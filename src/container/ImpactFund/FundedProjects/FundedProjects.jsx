import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useGetImpactFundsQuery } from "../../../redux/apis/clientsApi";
import CustomLoader from "../../../components/CustomLoader/CustomLoader";


const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: 450, // Set a fixed height for the card
  margin: "20px",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  border: "none",
  display: "flex",
  flexDirection: "column",
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "#888",
  textAlign: "center",
  marginTop: "10px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "10px",
  marginBottom: "10px",
}));

const StatusLabel = styled(Button)(({ theme }) => ({
  backgroundColor: "#C3E886",
  color: "#000",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "20px",
  padding: "5px 10px",
  margin: "10px auto",
  display: "block",
  "&:hover": {
    backgroundColor: "#C3E886", // Maintain the same background color on hover
    color: "#000", // Maintain the same text color on hover
  },
}));

const ViewProjectButton = styled(Button)(({ theme }) => ({
  color: "#ff9800",
  fontSize: "14px",
  fontWeight: "bold",
  textTransform: "none",
  margin: "0 auto",
  display: "block",
}));

const FundedProjects = () => {


const ProjectCard = ({ impactFund }) => {
  const navigate = useNavigate(); 

  const handleViewProject = () => {
    navigate(`/impact-fund/${impactFund.id}`);
  };

  const imageUrl = `http://localhost:3000/${impactFund.projects[0].media[0]}`;
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={impactFund.projects[0].name}
        border="none"
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <CategoryLabel variant="subtitle2">CULTURE REGENERATION </CategoryLabel>
        <Title variant="h6">{impactFund.projects[0].name}</Title>
        <StatusLabel>{impactFund.status}</StatusLabel>
      </CardContent>
      <CardActions>
        <ViewProjectButton onClick={handleViewProject}>View Project →</ViewProjectButton>
      </CardActions>
    </StyledCard>
  );
};

  const { data: impactFunds, isLoading, isError, error } = useGetImpactFundsQuery();
  console.log("data", impactFunds);

  // Filter the impact funds to include only those with status "active"
  const activeImpactFunds = impactFunds?.results.filter(
    (impactFund) => impactFund.status === "completed"
  );

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <Box sx={{ backgroundColor: "#000", padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}
      >
        Funded Projects
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {activeImpactFunds?.slice(0, 3).map((impactFund, index) => (
          <ProjectCard key={index} impactFund={impactFund} />
        ))}
      </Box>
    </Box>
  );
};

export default FundedProjects;
