import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Immersion from "../../../assets/Immersion.png";
import community from "../../../assets/community.png";
import authentication from "../../../assets/auth.svg";
import CultureExperiences from "./CultureExpreiences"; // Ensure the file name is correct
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the ArrowForward icon
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate = useNavigate()
  const achievements = [
    {
      title: "Private cultural immersions",
      imageUrl: Immersion,
    },
    {
      title: "Empowering local communities",
      imageUrl: community,
    },
    {
      title: "Authenticity through blockchain",
      imageUrl: authentication,
    },
  ];

  return (
    <Box
      id="experiences"
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: 4, color: "rgb(234, 218, 213)" }}
      >
        OUR CURATED CULTURAL EXPERIENCES
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          marginBottom: 4,
        }}
      >
        {achievements.map((achievement, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              width: 150,
              marginRight: 2,
            }}
            key={index}
          >
            <CardMedia
              component="img"
              sx={{
                width: 100,
                height: 100,
                margin: "10px 0",
              }}
              image={achievement.imageUrl}
              alt="Achievement image"
            />
            <CardContent
              sx={{
                flexGrow: 1,
                padding: "8px 16px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "rgb(234, 218, 213)",
                }}
              >
                {achievement.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <CultureExperiences />
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          marginTop: 0.1,
          marginBottom: 2,
          backgroundColor: "#B56C32",
          color: "rgb(234, 218, 213)",
          "&:hover": {
            backgroundColor: "#B56C32",
            color: "rgb(234, 218, 213)",
          },
        }}
        onClick={() => navigate(`/experiences`)} // Navigate to experience details

      >
        Discover More Experiences
      </Button>
    </Box>
  );
};

export default Experiences;
