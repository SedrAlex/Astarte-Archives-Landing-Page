import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import HoverCard from "./HoverCard";

const UpcomingEvents = ({ tours }) => {
  return (
    <Box
      sx={{
        color: "#fff",
        padding: "80px",
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        ON-DEMAND EXPERIENCES
      </Typography>
      <Grid container spacing={4} justifyContent="start">
        {tours.map((tour, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HoverCard
              id={tour.id}
              image={`http://localhost:3000/${tour.media[0]}`}
              title={tour.title}
              description={tour.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcomingEvents;
