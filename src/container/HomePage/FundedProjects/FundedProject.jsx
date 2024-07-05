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
      id="impact-fund"
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "2rem",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
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
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#000",
              textShadow:
                "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
            }}
          >
            $750K+
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#000",
            }}
          >
            ECONOMIC IMPACT
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#000",
              textShadow:
                "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
            }}
          >
            21
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#000",
            }}
          >
            PROJECTS LISTED
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#000",
              textShadow:
                "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff",
            }}
          >
            5K+
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#000",
            }}
          >
            PEOPLE IMPACTED
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "2rem" }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ backgroundColor: "#1c1c1c" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Button
                  variant="contained"
                  color={
                    project.status === "Needs Funding"
                      ? "warning"
                      : project.status === "Achieved"
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
                  {project.description.toUpperCase()}
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
