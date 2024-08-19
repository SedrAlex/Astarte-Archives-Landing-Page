import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SeasonalExperiences = ({ tours }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '-');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "40px",
        backgroundColor: "#000",
        minHeight: "100vh",
      }}
    >
      {tours?.map((tour, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            width: "100%",
          }}
        >
          <Card
            sx={{
              width: "50%",
              maxWidth: "600px",
              marginRight: "20px",
              backgroundColor: "#000",
              boxShadow: "none",
              border: "none",
            }}
          >
            <CardMedia
              component="img"
              height="700px"
              image={`http://localhost:3000/${tour.media[0]}`} // Assuming image is a property of tour
              alt={tour.title}
              sx={{ borderRadius: "20px", border: "none" }}
            />
          </Card>
          <CardContent sx={{ width: "50%", maxWidth: "600px" }}>
            <Typography variant="h4" component="div" gutterBottom>
              {tour.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tour.description}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ marginTop: "40px" }}>
              BOOKING DATES: {formatDate(tour.registrationStartDate)} -{" "}
              {formatDate(tour.registrationEndDate)}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ marginTop: "40px" }}>
              DURATION: {tour.duration}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "inline-block",
                padding: "5px 20px",
                backgroundColor: "rgb(249, 172, 145)",
                color: "#000",
                borderRadius: "20px",
                marginRight: "5px",
                marginTop: "20px",
              }}
            >
              LIMITED AVAILABILITY
            </Typography>
            <Button
              variant="contained"
              color="warning"
              sx={{
                marginTop: "20px",
                height: "50px",
                borderRadius: "10px",
                display: "block",
                color: "#000",
              }}
              onClick={() => navigate(`/experiences/${tour.id}`)}
            >
              LEARN MORE
            </Button>
          </CardContent>
        </Box>
      ))}
    </Box>
  );
};

export default SeasonalExperiences;
