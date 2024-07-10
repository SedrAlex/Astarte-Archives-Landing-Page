import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Card } from "@mui/material";
import Logo from "../../../assets/logo.png"; // Path to your logo
import DamascusMuseum from "../../../assets/DamascusMuseum.png";
const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would integrate EmailJS or another email sending service
    console.log("Email submitted:", email);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        elevation={0} // Remove shadow to effectively remove the border
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#000",
          border: "none", // Ensure no border is applied
        }}
      >
        <img
          src={Logo}
          alt="Quantum Temple"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "rgb(234, 218, 213)" }}
        >
          TRAVEL. TRACK. DISCOVER.
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ color: "rgb(234, 218, 213)" }}
        >
          SUBSCRIBE FOR CULTURAL DEEP DIVES, NEWS AND MORE FROM ASTARTE
          ARCHEIVES
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            label="Enter your email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            sx={{
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#B56C32",
                },
                "&:hover fieldset": {
                  borderColor: "#B56C32",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#B56C32",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ color: "rgb(234, 218, 213)" }}
          >
            Subscribe
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default Subscribe;
