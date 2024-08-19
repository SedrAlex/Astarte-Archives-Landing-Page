import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import unisco from "../../../assets/unisco.webp";
const Background = styled(Box)({
  backgroundColor: "#000",
  color: "#fff",
  padding: "50px 0",
});

const Image = styled("img")({
  width: "100%",
  borderRadius: "10px",
});

const ExperienceWithOrganaization = ({ tour }) => {
  const imageUrl = `http://localhost:3000/${tour.media[0]}`;
  return (
    <Background>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              sx={{ color: "#ff7f00" }}
            >
              HERITAGE EXPERIENCE
            </Typography>
            <Typography variant="h3" gutterBottom>
              {tour.title}{" "}
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <img
                src={unisco}
                alt="UNESCO Logo"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <Typography variant="body1">
                UNESCO WORLD HERITAGE SITE
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src={imageUrl} alt="Penglipuran Village" />
          </Grid>
        </Grid>
      </Container>
    </Background>
  );
};

export default ExperienceWithOrganaization;
