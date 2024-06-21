import React from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import video from "../../../assets/heritage.mp4";
import NavBar from "../../../components/NavBar/NavBar";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        "&:before, &:after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "20%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
          zIndex: 2,
        },
        "&:before": {
          top: 0,
        },
        "&:after": {
          bottom: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
        },
        "& video": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          //   zIndex: -1,
        },
        "@keyframes bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-30px)" },
          "60%": { transform: "translateY(-15px)" },
        },
      }}
    >
      <NavBar />

      <video
        autoPlay
        muted
        loop
        sx={{
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "#B56C32",
          textAlign: "center",
          mb: 4,
          zIndex: 3,
          fontSize: "3rem",
          textShadow:
            "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
        }}
      >
        History Happened Here
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ alignSelf: "center", mb: 2 }}
      >
        Start Your Journey <i className="fas fa-arrow-right" />
      </Button>
      <KeyboardArrowDownIcon
        sx={{
          color: "rgb(234, 218, 213)",
          fontSize: "3rem",
          animation: "bounce 2s infinite",
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default Hero;
