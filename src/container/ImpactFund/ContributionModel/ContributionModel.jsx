import React from 'react';
import { Box, Button, Grid, Typography, Paper, Tabs, Tab, Dialog, DialogContent, DialogTitle } from '@mui/material';

const ContributionModel = () => {
  const [value, setValue] = React.useState(0);
  const [contributionOptions, setContributionOptions] = React.useState([
    { amount: '250', label: 'USD $250 / ONCE' },
    { amount: '500', label: 'USD $500 / ONCE' },
    { amount: '1K', label: 'USD $1K / ONCE' },
    { amount: 'ADD ANOTHER AMOUNT', label: 'ADD ANOTHER AMOUNT' },
  ]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setContributionOptions([
        { amount: '30', label: '$30 / MONTHLY' },
        { amount: '50', label: '$50 / MONTHLY' },
        { amount: '100', label: '$100 / MONTHLY' },
        { amount: '300', label: '$300 / MONTHLY' },
        { amount: 'ADD ANOTHER AMOUNT', label: 'ADD ANOTHER AMOUNT' },
      ]);
    } else {
      setContributionOptions([
        { amount: '250', label: '$250 / ONCE' },
        { amount: '500', label: '$500 / ONCE' },
        { amount: '1K', label: '$1K / ONCE' },
        { amount: 'ADD ANOTHER AMOUNT', label: 'ADD ANOTHER AMOUNT' },
      ]);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '70vh', px: 18,  }}>
      <Typography variant="h4" align="center" gutterBottom>
        CHOOSE YOUR CONTRIBUTION MODEL
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="primary">
          <Tab label="CONTRIBUTE MONTHLY" />
          <Tab label="CONTRIBUTE ONCE" />
        </Tabs>
      </Box>
      <Paper sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {contributionOptions.map((option, index) => (
            <Grid item key={index}>
              <ContributionOption amount={option.amount} label={option.label} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          * 10% of all contributions will be allocated to Arstrate-Archeives to support museums and preserve artifacts.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4 }} onClick={handleOpen}>
            CONTRIBUTE NOW
          </Button>
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" sx={{ width: '300px', mx: 'auto' }}>
        <DialogTitle>CHOOSE YOUR CONTRIBUTION MODEL</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="primary">
              <Tab label="CONTRIBUTE MONTHLY" />
              <Tab label="CONTRIBUTE ONCE" />
            </Tabs>
          </Box>
          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Grid container spacing={2} justifyContent="center">
              {contributionOptions.map((option, index) => (
                <Grid item key={index}>
                  <ContributionOption amount={option.amount} label={option.label} />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              * 10% of all contributions will be allocated to Arstrate-Archeives to support museums and preserve artifacts.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4 }} onClick={handleClose}>
                CONTRIBUTE NOW
              </Button>
            </Box>
          </Paper>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const ContributionOption = ({ amount, label }) => {
  const isCustomAmount = amount === 'ADD ANOTHER AMOUNT';
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: isCustomAmount ? 'transparent' : '#f5f5f5',
        border: isCustomAmount ? '1px dashed #ccc' : 'none',
        textAlign: 'center',
        minWidth: 150,
        height: 100,
      }}
    >
      <Typography variant="h6">{label}</Typography>
    </Paper>
  );
};

export default ContributionModel;
