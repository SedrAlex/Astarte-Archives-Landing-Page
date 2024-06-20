import StatisticsSection from "./StatisticSection";
import ProjectCard from "./ProjectCard";
import { Grid, Box, Typography, styled, Button } from "@mui/material";
import backgroundImage from "../../../assets/fund.jpeg";
const BouncingButton = styled(Button)({
  animation: "bounce 2s infinite",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
    "40%": { transform: "translateY(-30px)" },
    "60%": { transform: "translateY(-15px)" },
  },
});

const FundedProject = () => {
  const projects = [
    {
      title: "Balinese Temple",
      image: "/temple.jpg",
      description: "Reinstating a Balinese temple.",
      status: "Needs Funding",
    },
    {
      title: "Irrigation Techniques",
      image: "/irrigation.jpg",
      description: "Adapting traditional Balinese irrigation techniques.",
      status: "Achieved",
    },
    {
      title: "Performing Arts",
      image: "/arts.jpg",
      description: "Empowering performing arts in Kesidan.",
      status: "In Progress",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: 4, // Added padding for overall spacing
      }}
    >
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        IMPACT PROJECTS LINKED TO YOUR TRAVEL EXPERIENCES
      </Typography>
      {/* <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        gutterBottom
        sx={{
          fontSize: "1.1rem", // Slightly larger font size for better readability
          lineHeight: "1.75", // Increased line height for better text flow
          margin: "20px 0", // Added top and bottom margin for better separation
          textTransform: "none", // Ensure text is not automatically capitalized
          fontWeight: "medium", // Medium weight for slightly more emphasis
        }}
      >
        Our dedicated impact funds fosters regenerative tourism education,
        cultural sites restoration, arts and crafts revitalization, and
        sustainable farming and many more.
      </Typography> */}
      {/* <StatisticsSection /> */}
    </Box>
  );
};

export default FundedProject;
