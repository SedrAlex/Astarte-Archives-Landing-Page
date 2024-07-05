import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

const CustomCard = ({ image, title, description, duration, peopleMax }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "20px",
        backgroundColor: "#1c1c1c",
        color: "#fff",
        borderRadius: "15px",
        border: "none",
      }}
    >
      <CardMedia component="img" height="400" image={image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "1.5rem",
            height: "3rem", // Fixed height for title
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "#ccc",
            marginBottom: "20px",
            height: "6rem", // Fixed height for description
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#ccc" }}
          >
            DURATION: {duration}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#ccc" }}
          >
            {peopleMax} PEOPLE MAX
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          color="warning"
          sx={{ margin: "auto" }}
        >
          BOOK NOW
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
