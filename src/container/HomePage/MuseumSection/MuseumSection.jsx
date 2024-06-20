import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import MuseumCard from "./MuseumCard";
import DamascusMuseum from "../../../assets/DamascusMuseum.png";
import PalmyraMuseum from "../../../assets/PalmyraMuseum.png";
import AleppoMuseum from "../../../assets/AleppoMuseum.png";
import AlRaqqaMuseum from "../../../assets/AlRaqqaMuseum.png";

const museums = [
  {
    title: "National Museum of Damascus",
    description:
      "Established in 1919, it is the country's largest museums in term of the artifact collection. The museum exhibits covers the entire range of Syrian history over a span of over 11 millennia. The museum also has a gallery for the Syrian contemporary art.",
    image: DamascusMuseum,
  },
  {
    title: "National Museum of Palmyra",
    description:
      "Located in the Syrian city of Palmyra. The museum’s collections comprise historical artifacts dating primarily from the 2nd and 3rd century AD, a golden age for this desert caravan city, and provide significant insight into the religious and commercial life of the time.",
    image: PalmyraMuseum,
  },
  {
    title: "National Museum of Aleppo",
    description:
      "The largest museum in the city of Aleppo, and was founded in 1931. The largest sections of the museum are devoted to the Iron Age and the Islamic period. The entrance to the museum is a temple gateway with a female sphinx from the Iron Age (9th century BC) Neo-Hittite settlement of Tell Halaf.",
    image: AleppoMuseum,
  },
  {
    title: "National Museum of Raqqa",
    description:
      "The museum is dedicated to the preservation of the culture of the Raqqa province. At its peak, before the war, the museum housed some 7,000 artifacts from the surrounding regions.",
    image: AlRaqqaMuseum,
  },
];

const MuseumSection = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 4,
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginBottom: 2, color: "rgb(234, 218, 213)" }}
        >
          TREASURES OF SYRIAN HERITAGE
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            color: "rgb(234, 218, 213)",
          }}
        >
          Discover the world's oldest alphabet, intricate sculptures, and
          textiles from Palmyra, and the majestic Lion of al-Lat. Each artifact
          tells a story of Syria's diverse cultural legacy, preserved and
          showcased for future generations.
        </Typography>
      </Box>
      <Grid item>
        <Grid container spacing={1} justifyContent="center">
          {museums.map((museum, index) => (
            <Grid item key={index} xs={12} md={6}>
              <MuseumCard {...museum} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MuseumSection;
