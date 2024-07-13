import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import BackGroundImage from "../../../assets/BackgroundImage.jpg";

const SectionContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    // backgroundImage: `url(${BackGroundImage})`,
    padding: theme.spacing(1),
  }));
  
  const CustomButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1, 3),
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    '&:first-of-type': {
      backgroundColor: '#FF7F00',
      color: '#000',
    },
    '&:last-of-type': {
      backgroundColor: '#333',
      color: '#fff',
    },
  }));

const ContactUs = () => {
    return (
        <SectionContainer>
          <Typography variant="h4" gutterBottom>
            WANT TO LEARN MORE?
          </Typography>
          <Typography variant="body1" gutterBottom>
            FOR MORE DETAILS ON HOW YOU CAN PARTICIPATE AND THE SPECIFICS OF EACH PROJECT
          </Typography>
          <Box>
            <CustomButton variant="contained">
              DOWNLOAD OUR IMPACT REPORT
            </CustomButton>
            <CustomButton variant="contained">
              CHAT WITH US
            </CustomButton>
          </Box>
        </SectionContainer>
      );
    };
    
export default ContactUs;
