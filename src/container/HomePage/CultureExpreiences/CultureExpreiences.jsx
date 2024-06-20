import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import palmyra from "../../../assets/Breif.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the ArrowForward icon

function CultureExperiences() {
  const experiences = [
    {
      title: "Sunrise Water Purification at Pura Tirta Empul",
      description:
        "Meaning 'Holy Spring' in Balinese, Tirta Empul was built for Vishnu, the Hindu God of Water. Today, it draws people from across the globe to experience ritual purification for the mind, body and spirit.",
      imageUrl: palmyra,
      duration: "Duration: 6h",
    },
    // Duplicate the experience for demonstration
    {
      title: "Sunrise Water Purification at Pura Tirta Empul",
      description:
        "Meaning 'Holy Spring' in Balinese, Tirta Empul was built for Vishnu, the Hindu God of Water. Today, it draws people from across the globe to experience ritual purification for the mind, body and spirit.",
      imageUrl: palmyra,
      duration: "Duration: 6h",
    },
    {
      title: "Sunrise Water Purification at Pura Tirta Empul",
      description:
        "Meaning 'Holy Spring' in Balinese, Tirta Empul was built for Vishnu, the Hindu God of Water. Today, it draws people from across the globe to experience ritual purification for the mind, body and spirit.",
      imageUrl: palmyra,
      duration: "Duration: 6h",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", // Changed from "column" to "row"
        flexWrap: "wrap", // Allows wrapping of items if the container width is not enough
        justifyContent: "center", // Centers the cards horizontally
        alignItems: "center", // Aligns the cards vertically
        gap: 5, // Adds space between the cards
        padding: 3, // Optional: Adds padding around the entire container for better spacing
      }}
    >
      {experiences.map((experience, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 400, // Adjusted width to fit multiple cards in a row
            height: 700,
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgb(19, 19, 19)",
            mb: 2,
            boxShadow: "0px 4px 20px #B56C32",
            borderRadius: "30px",
            border: "none",
          }}
        >
          <CardMedia
            component="img"
            image={experience.imageUrl}
            alt="Cultural Experience"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              boxShadow: "0 -8px 6px -6px #B56C32",
            }}
          />
          <CardContent sx={{ padding: 3, color: "white" }}>
            <Typography gutterBottom variant="h5" component="div">
              {experience.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "#B56C32" }}
            >
              {experience.description}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  padding: "4px 8px", // Smaller padding
                  borderRadius: "8px",
                  display: "inline-block",
                  backgroundColor: "#2C2C2C",
                  fontSize: "0.75rem", // Smaller font size
                  width: "auto", // Adjust width based on content
                }}
              >
                {experience.duration}
              </Typography>
              <Button
                size="small"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  ml: 6, // Adjusted margin for spacing
                  borderColor: "#B56C32",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: 2,
                  color: "#B56C32",
                  padding: "4px 8px", // Smaller padding
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#B56C32",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CultureExperiences;
