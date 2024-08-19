import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const HoverCard = ({ id,image, title, description }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <StyledCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardMedia component="img" height="250" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" className="title ">
          {title}
        </Typography>
        {hover && (
          <Box className="description">
            <Typography
              variant="body2"
              color="rgb(234, 218, 213)"
              className="description-text"
            >
              {description}
            </Typography>
            <Button
              variant="warning"
              className="learn-more"
              onClick={() => navigate(`/experiences/${id}`)}
            >
              Learn More →
            </Button>
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  width: 300,
  height: 400,
  margin: "10px", // Ensure margin is added to separate cards
  borderRadius: "10px",
  backgroundColor: "#1c1c1c",
  border: "none",
  overflow: "hidden",
  "& .title": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
    color: "rgb(234, 218, 213)",
  },
  "& .description": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s",
    padding: "20px",
  },
  "& .description-text": {
    marginBottom: "20px",
    textAlign: "center",
  },
  "& .learn-more": {
    color: "#ff9800",
    "&:hover": {
      color: "#ff9800",
    },
  },
  "&:hover .description": {
    opacity: 1,
  },
}));

export default HoverCard;
