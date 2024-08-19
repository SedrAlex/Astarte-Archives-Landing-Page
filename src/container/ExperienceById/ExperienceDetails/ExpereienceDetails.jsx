import React from "react";
import { Grid, Tabs, Tab, Box, Typography, Avatar } from "@mui/material";
import BookingForm from "../BookingForm/BookingForm";
import Itinerary from "./Itinerary";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ExperienceDetails = ({ tour }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    document
      .getElementById(`section-${newValue}`)
      .scrollIntoView({ behavior: "smooth" });
  };

  const renderStars = (rating) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[...Array(5)].map((_, index) =>
          index < rating ? (
            <StarIcon key={index} sx={{ color: "#B56C32" }} />
          ) : (
            <StarBorderIcon key={index} sx={{ color: "#B56C32" }} />
          )
        )}
      </Box>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Tabs example"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="OVERVIEW" />
          <Tab label="ITINERARY" />
          <Tab label="REVIEWS" />
        </Tabs>
        <Box id="section-0" sx={{ padding: 2 }}>
          <Typography variant="h6">OVERVIEW</Typography>
          <Typography>
            {tour.description}
          </Typography>
        </Box>
        <Box id="section-1" sx={{ padding: 2 }}>
          <Typography variant="h6">ITINERARY</Typography>
          <Itinerary tour ={tour} itinerary={tour.itinerary} includes={tour.includes}/>
        </Box>
        <Box id="section-2" sx={{ padding: 2 }}>
          <Typography variant="h6">REVIEWS</Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Avatar alt="User Avatar" src="https://i.pravatar.cc/150?img=3" />
            <Box sx={{ marginLeft: 2 }}>
            {renderStars(tour.ratings[0].rating)}
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {tour.ratings[0].comment}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            padding: 0.1,
            margin: 4,
            marginRight: 2,
            position: "sticky",
            top: "20px",
            border: "1px solid #B56C32",
            borderRadius: "8px",
            zIndex: 10,
            backgroundColor: "white",
          }}
        >
          <BookingForm tour={tour} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperienceDetails;
