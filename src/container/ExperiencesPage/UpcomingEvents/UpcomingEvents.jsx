import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import HoverCard from "./HoverCard";

const UpcomingEvents = () => {
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
        <Grid item xs={12} sm={6} md={3}>
          <HoverCard
            image="https://i.pinimg.com/564x/18/8a/e9/188ae9f89dd01fb9138717439302e07a.jpg"
            title="Terraced Rice Fields of Jatiluwih"
            description="Embark on a cultural journey in Jatiluwih, Bali, renowned for its stunning rice terraces and rich heritage."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HoverCard
            image="https://i.pinimg.com/564x/bf/d6/15/bfd615043a395792d4048b58b469ba95.jpg"
            title="Royal Topeng & Mask-Making Masters of Singapadu"
            description="Explore the legendary Barong Kuntisraya dance drama and the village's rich artistic heritage."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HoverCard
            image="https://i.pinimg.com/564x/b7/33/21/b73321096a364791bb2ad9ff8bc8818a.jpg"
            title="Water Blessing Ritual with a High Priestess"
            description="Experience a sacred water blessing ritual led by a high priestess in a serene natural setting."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HoverCard
            image="https://i.pinimg.com/564x/47/e5/10/47e5107b4036fbb449917227fbf2bb9d.jpg"
            title="Water Blessing Ritual with a High Priestess"
            description="Experience a sacred water blessing ritual led by a high priestess in a serene natural setting."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpcomingEvents;
