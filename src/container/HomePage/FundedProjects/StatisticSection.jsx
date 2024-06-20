import React from "react";
import { Box, Typography } from "@mui/material";

const StatisticSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 4,
        backgroundColor: "none",
        color: "white",
      }}
    >
      <Box>
        <Typography variant="h1">$750K+</Typography>
        <Typography>ECONOMIC IMPACT</Typography>
      </Box>
      <Box>
        <Typography variant="h1">21</Typography>
        <Typography>PROJECTS LISTED</Typography>
      </Box>
      <Box>
        <Typography variant="h1">5K+</Typography>
        <Typography>PEOPLE IMPACTED</Typography>
      </Box>
    </Box>
  );
};

export default StatisticSection;
