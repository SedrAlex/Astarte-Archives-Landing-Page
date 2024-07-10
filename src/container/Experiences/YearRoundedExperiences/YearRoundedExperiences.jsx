import React from "react";
import CustomCard from "./CustomCard";
import { Box, Typography } from "@mui/material";

const YearRoundedExperiences = () => {
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
        <CustomCard
          image="https://i.pinimg.com/564x/e3/30/80/e330804dd90e966286401f4486cf1dcd.jpg"
          title="EXPLORE THE MAJESTIC CITADEL OF ALEPPO"
          description="Discover the rich history of Aleppo Citadel, a UNESCO World Heritage site. Explore its ancient walls, grand halls, and breathtaking views of the city. Learn about its strategic importance and architectural marvels."
          duration="4H"
          peopleMax="30"
        />
        <CustomCard
          image="https://i.pinimg.com/564x/7a/d7/4c/7ad74c73276dbd49bd625e5dd1b18efe.jpg"
          title="DISCOVER THE ANCIENT BOSRA AL-SHAM"
          description="Journey through the ancient city of Bosra Al-Sham, known for its well-preserved Roman theater and historical significance. Experience the blend of Roman, Byzantine, and Islamic architecture in this remarkable site."
          duration="5H"
          peopleMax="25"
        />
      </Box>
    </Box>
  );
};

export default YearRoundedExperiences;
