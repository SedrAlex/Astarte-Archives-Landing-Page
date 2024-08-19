import React from "react";
import CustomCard from "./CustomCard";
import { Box, Typography } from "@mui/material";

const YearRoundedExperiences = ({ tours }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: "rgb(234, 218, 213)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        YEAR-ROUND CRAFTED EXPERIENCES IN SYRIA
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: "rgb(234, 218, 213)",
          textAlign: "center",
          marginBottom: "40px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        FROM THE ANCIENT RUINS OF PALMYRA TO THE MAJESTIC CITADEL OF ALEPPO,
        EMBARK ON A JOURNEY THROUGH SYRIA'S LIVING HISTORY AND CULTURAL
        HERITAGE. DISCOVER THE TIMELESS BEAUTY OF DAMASCUS, THE OLDEST
        CONTINUOUSLY INHABITED CITY IN THE WORLD, AND EXPLORE THE ARCHITECTURAL
        MARVELS OF BOSRA AL-SHAM. CONNECT INTIMATELY WITH SYRIA'S RICH HISTORY,
        VIBRANT CULTURE, AND BREATHTAKING SCENERY, ALL GUIDED BY THE WISDOM OF
        LOCALS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {tours?.map((tour, index) => (
          <CustomCard
            key={index}
            id={tour.id}
            image={`http://localhost:3000/${tour.media[0]}`} // Assuming media is an array of image paths
            title={tour.title}
            description={tour.description}
            duration={tour.duration} // Assuming duration is a property of tour
            peopleMax={tour.capacity} // Assuming peopleMax is a property of tour
          />
        ))}
      </Box>
    </Box>
  );
};

export default YearRoundedExperiences;
