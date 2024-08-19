import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useBookExperienceMutation } from '../../../redux/apis/clientsApi';

const OrangeButton = styled(Button)({
  backgroundColor: '#ff7f00',
  color: '#fff',
  cursor: "pointer",
  borderRadius: '20px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#e67300',
  },
});

const BookingForm = ({ tour, state }) => {
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const [bookExperience] = useBookExperienceMutation();

  const handleToken = async () => {
    try {
      const bookingData = {
        experience: tour.id,
        user: user.id,
      };
      await bookExperience({ data: bookingData });
      console.log('Booking confirmed');
      alert('You have successfully reserved this experience!');
    } catch (error) {
      console.error('Booking failed', error);
      alert('Booking failed. Please try again.');
    }
  };

  const handleBookingClick = () => {
    if (!user || user.role === "admin") {
      navigate('/sign-in');
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom color="#000">
        CHECK AVAILABILITY
      </Typography>
      <Box sx={{ borderBottom: '1px solid #000', marginBottom: '20px' }}></Box>
      <Typography variant="body1" gutterBottom color="#000">
        DURATION : {tour.duration}
      </Typography>
      <Typography variant="body1" gutterBottom color="#000">
        BOOKING INFO :
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        <Grid item xs={6}>
          <TextField
            type="date"
            defaultValue={formatDate(tour.registrationStartDate)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: '1px solid #000', marginBottom: '20px' }}></Box>
      <Typography variant="body1" gutterBottom color="#000">
        TOTAL TO PAY:
      </Typography>
      <Typography variant="h4" align="right" gutterBottom color="#000">
        {tour.cost} USD
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
        50% OF YOUR PURCHASE IS REINVESTED IN THE COMMUNITY
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {user && user.role !== "admin" ? (
          <StripeCheckout
            stripeKey='pk_test_51NDWMnDnOnVRIDi92NbgY9ebRx7zyZtSdTjRGOdGjv9ICqwK3zQg3VpKAKpUyP071p7DPtfYH0v5naP6iPxRKI1w00j76ULrXE'
            token={handleToken}
            amount={tour.cost * 100} // Stripe expects the amount in cents
            name="Book Experience"
            currency="USD"
          >
            <OrangeButton variant="contained">
              BOOK EXPERIENCE →
            </OrangeButton>
          </StripeCheckout>
        ) : (
          <OrangeButton variant="contained" onClick={handleBookingClick}>
            SIGN IN TO BOOK
          </OrangeButton>
        )}
      </Box>
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
        TICKET(S) CANNOT BE REFUNDED OR CHANGED ONCE PURCHASED.
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary">
        ANY QUESTIONS? <span style={{ color: '#0000ff' }}>TALK TO AN EXPERT</span>
      </Typography>
    </Container>
  );
};

export default BookingForm;
