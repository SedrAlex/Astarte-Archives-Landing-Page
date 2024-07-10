import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import partner_1 from "../../../assets/partner1.png";
import partner_2 from "../../../assets/partner2.png";
import partner_3 from "../../../assets/partner3.png";
import partner_4 from "../../../assets/partner4.png";
const PartnerLogos = [
  { src: partner_1, alt: "Partner 1" },
  { src: partner_2, alt: "Partner 2" },
  { src: partner_3, alt: "Partner 3" },
  { src: partner_4, alt: "Partner 4" },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#000", padding: "2rem 0" }}>
      <Typography
        variant="h4"
        textAlign="center"
        marginBottom="2rem"
        sx={{ color: "rgb(234, 218, 213)" }}
      >
        Our Partners
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {PartnerLogos.map((logo, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Box
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                // width: "300px",
                height: "auto",
                maxWidth: "150px",
                margin: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
