import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const MuseumCard = ({ title, description, image }) => (
  <Card
    sx={{
      maxWidth: 600,
      height: 300,
      margin: 1,
      backgroundColor: "rgb(19, 19, 19)",
      borderColor: " #B56C32",
    }}
  >
    <Grid container sx={{ display: "flex" }}>
      <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            flex: 1,
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item xs={8} sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "rgb(234, 218, 213)" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#B56C32" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
);

export default MuseumCard;
