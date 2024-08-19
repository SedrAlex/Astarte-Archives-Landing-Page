import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const CustomLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" sx={{ marginTop: "20px" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default CustomLoader;
