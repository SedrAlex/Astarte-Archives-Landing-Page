// src/components/MapSection.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import MapImage from "../../../assets/map.png";

const MapContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "800px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${MapImage})`,
});

const MapSection = () => {
  const handleClick = () => {
    alert("You clicked on the interactive element!");
  };

  return <MapContainer></MapContainer>;
};

export default MapSection;
