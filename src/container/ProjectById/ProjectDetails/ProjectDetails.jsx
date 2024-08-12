import React from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Divider,
} from "@mui/material";
import Logo from "../../../assets/logo.png";
import { styled } from "@mui/system";

const CustomProgressBar = styled("div")(({ progress }) => ({
  position: "relative",
  height: 20,
  borderRadius: 10,
  backgroundColor: "#555",
  overflow: "hidden",
  width: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: "100%",
    backgroundColor: "#ff9800",
    transition: "width 0.3s ease-in-out",
  },
}));
const LogoCircle = styled("div")(({ progress }) => ({
  position: "absolute",
  top: "60%",
  left: `${progress}%`,
  transform: "translate(-50%, -50%)",
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
}));
const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1, 3),
  borderRadius: "20px",
  fontSize: "1rem",
  backgroundColor: "#FF7F00",
  alignItems: "center",
  color: "#000",
}));
const ProjectDetails = ({ currentAmount, targetAmount }) => {
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <Box
      sx={{
        maxWidth: 800,
        height: 500,
        margin: "auto",
        // padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        color: "#000",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        PROJECT DETAILS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 5px",
            backgroundColor: "#FEC879",
            color: "#000",
            borderRadius: "20px",
            marginRight: "5px",
          }}
        >
          NEEDS FUNDING
        </Typography>
      </Box>
      <Divider />
      <Typography variant="body2" align="center" gutterBottom p={5}>
        TOTAL FUNDS COLLECTED:{" "}
        <span style={{ color: "#f0960f" }}>$ {currentAmount}</span> / ${" "}
        {targetAmount}
      </Typography>
      <Box sx={{ position: "relative", marginBottom: 2, px: 8 }}>
        <CustomProgressBar progress={progress} />
        <LogoCircle progress={progress}>
          <img src={Logo} alt="Logo" style={{ width: "70%", height: "70%" }} />
        </LogoCircle>
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        BUDGET: US ${targetAmount}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        color="primary"
        gutterBottom
        p={2}
      >
        VIEW PROJECT BUDGET BREAKDOWN
      </Typography>
      <Box sx={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        {" "}
        <CustomButton variant="contained">
          CONTRIBUTE TO THIS PROJECT →
        </CustomButton>{" "}
      </Box>

      <Typography variant="caption" align="center" display="block" mx={10} >
      * 10% of all contributions will be allocated to Arstrate-Archeives to support museums and preserve artifacts.
      </Typography>
    </Box>
  );
};

export default ProjectDetails;
