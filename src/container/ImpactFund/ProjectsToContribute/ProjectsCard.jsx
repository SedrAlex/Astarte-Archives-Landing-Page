import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Logo from "../../../assets/logo.png";

const CardBackground = styled(Card)(({ image }) => ({
  position: 'relative',
  maxWidth: 345,
  height: 500, // Aumenta la altura de la tarjeta
  borderRadius: 10,
  border: "none",
  backgroundColor: '#1c1c1c',
  color: '#fff',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const GradientOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
});

const LogoCircle = styled('div')(({ progress }) => ({
  position: 'absolute',
  top: '60%',
  left: `${progress}%`,
  transform: 'translate(-50%, -50%)',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

const CustomProgressBar = styled('div')(({ progress }) => ({
  position: 'relative',
  height: 10,
  borderRadius: 5,
  backgroundColor: '#555',
  overflow: 'hidden',
  width: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#ff9800',
    transition: 'width 0.3s ease-in-out',
  },
}));

const ProjectsCard = ({ title, description, image, currentAmount, targetAmount }) => {
  const progress = (currentAmount / targetAmount) * 100;

  return (
    <CardBackground image={image}>
      <GradientOverlay />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
      <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            padding: "5px 20px",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            marginRight: "5px",
          }}>
                        {title}

          </Typography>
        <CardContent sx={{ textAlign: 'center' }}>
    
          {/* <Typography variant="h6" component="div" gutterBottom sx={{ color: '#ff9800', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
            {title}
          </Typography> */}
          <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
            {description}
          </Typography>
          <Box sx={{ my: 2, position: 'relative', width: '100%' }}>
            <Typography variant="body2" sx={{ color: '#ff9800', my: 4, fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              US ${currentAmount} / US ${targetAmount}
            </Typography>
            <CustomProgressBar progress={progress} />
            <LogoCircle progress={progress}>
              <img src={Logo} alt="Logo" style={{ width: '70%', height: '70%' }} />
            </LogoCircle>
              <Typography variant="body2" sx={{ textAlign:"left",color: '#fff',my: 2, fontWeight: 'bold',  zIndex: 1,textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                TOTAL FUNDED:{Math.round(progress)}%

              </Typography>
         
            
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#fff', mt: 1, fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
              ${currentAmount}
            </Typography>
            <Button variant="outlined" color="warning" sx={{ borderColor: '#ff9800', color: '#ff9800', fontWeight: 'bold' }}>
              CONTRIBUTE NOW
            </Button>
          </Box>
        </CardContent>
      </Box>
    </CardBackground>
  );
};

export default ProjectsCard;
