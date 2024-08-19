import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, Grid } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { styled } from '@mui/system';
import lunch from "../../../assets/food.svg";
import pick from "../../../assets/pick-up.svg";
import tickets from "../../../assets/tickets.svg";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  padding: theme.spacing(4),
  fontFamily: 'monospace',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: '#ff9800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  color: '#000',
  marginRight: theme.spacing(2),
}));

const IncludesSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const IconContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: theme.spacing(2),
}));

const IconItem = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
}));

const Image = styled('img')(({ theme }) => ({
  width: '40%',
  height: 'auto',
  borderRadius: '8px',
}));

const Itinerary = ({ tour, itinerary }) => {
  return (
    <Root>
      <Typography variant="h6">TOUR ITINERARY - {tour.duration}</Typography>
      <List>
        {itinerary.map((item, index) => (
          <StyledListItem key={index}>
            <StyledListItemIcon>
              {index + 1}
            </StyledListItemIcon>
            <ListItemText primary={item.description} />
          </StyledListItem>
        ))}
      </List>
      <Divider />
      <IncludesSection>
        <Typography variant="h6">INCLUDES:</Typography>
        <IconContainer container spacing={2}>
          {[
            { src: tickets, label: 'SITE TICKETS' },
            { src: pick, label: 'PICK-UP TRANSPORTATION' },
            { src: lunch, label: 'TRADITIONAL SYRIAN LUNCH' },
          ].map((item, index) => (
            <IconItem item xs={4} key={index}>
              <Image src={item.src} alt={item.label} />
              <Typography>{item.label}</Typography>
            </IconItem>
          ))}
        </IconContainer>
      </IncludesSection>
    </Root>
  );
};

export default Itinerary;
