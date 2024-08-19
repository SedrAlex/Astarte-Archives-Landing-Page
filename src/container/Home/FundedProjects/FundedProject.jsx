import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  styled,
} from "@mui/material";
import { useGetImpactFundsQuery } from "../../../redux/apis/clientsApi";

import backgroundImage from "../../../assets/impact.webp";
import CustomLoader from "../../../components/CustomLoader/CustomLoader";
const BouncingButton = styled(Button)({
  animation: "bounce 2s infinite",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
    "40%": { transform: "translateY(-30px)" },
    "60%": { transform: "translateY(-15px)" },
  },
});

const FundedProject = () => {
  const { data: impactFunds, isLoading, isError, error } = useGetImpactFundsQuery();
 const projects = impactFunds?.results.slice(0,3)
 if (isLoading) {
  return <CustomLoader />;
}

  return (
    <Box
      id="impact-fund"
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "2rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "conatin",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          color: "#B56C32",
          textAlign: "center",
          mb: 4,
          zIndex: 3,
          fontSize: "2rem",
          textShadow:
            "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
        }}
      >
        OUR DEDICATED IMPACT FUNDS FOSTERS REGENERATIVE TOURISM EDUCATION,
        CULTURAL SITES RESTORATION, ARTS AND CRAFTS REVITALIZATION, AND MANY
        MORE
      </Typography>
      <Grid container spacing={4} justifyContent="center">
    
     
      </Grid>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        {projects?.map((project, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ backgroundColor: "#1c1c1c" }}>
              <CardMedia
                component="img"
                height="200"
                image={`http://localhost:3000/${project.projects[0].media[0]}`}
                alt={project.projects[0].name}
              />
              <CardContent>
                <Button
                  variant="contained"
                  color={
                    project.status === "pending"
                      ? "warning"
                      : project.status === "completed"
                      ? "success"
                      : "primary"
                  }
                  size="small"
                >
                  {project.status.toUpperCase()}
                </Button>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ marginTop: "1rem" }}
                >
                  {project.projects[0].description.toUpperCase()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FundedProject;
