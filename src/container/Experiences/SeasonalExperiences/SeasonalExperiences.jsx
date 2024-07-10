import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const SeasonalExperiences = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "40px",
        backgroundColor: "#000",
        minHeight: "100vh",
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
          image="https://imagevars.gulfnews.com/2018/5/28/1_16a084a1279.2227881_905748627_16a084a1279_large.jpg"
          alt="Event Image"
          sx={{ borderRadius: "20px", border: "none" }}
        />
      </Card>
      <CardContent sx={{ width: "50%", maxWidth: "600px" }}>
        <Typography variant="h4" component="div" gutterBottom>
          SEASONAL DAMASCUS EVENTS
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          OLD DAMASCUS CULTURAL FESTIVAL: 5-DAY CELEBRATION OF HERITAGE AND ART
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join our cultural festival in Old Damascus, featuring the lively
          streets filled with traditional music, dance, and exquisite Syrian
          cuisine. Experience the vibrant atmosphere and immerse yourself in the
          rich culture and history of this ancient city
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ marginTop: "40px" }}>
          BOOKING DATES: 10/15/2024 - 10/19/2024
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ marginTop: "40px" }}>
          DURATION: 5 DAYS
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
        >
          LEARN MORE
        </Button>
      </CardContent>
    </Box>
  );
};

export default SeasonalExperiences;
