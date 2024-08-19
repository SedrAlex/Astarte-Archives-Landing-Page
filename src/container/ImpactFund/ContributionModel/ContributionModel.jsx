import React from 'react';
import { Box, Button, Grid, Typography, Paper, Tabs, Tab, Dialog, DialogContent, DialogTitle } from '@mui/material';

const ContributionModel = () => {
  const [value, setValue] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [contributionOptions, setContributionOptions] = React.useState([
    { amount: '250', label: 'USD $250 / ONCE' },
    { amount: '500', label: 'USD $500 / ONCE' },
    { amount: '1000', label: 'USD $1000 / ONCE' },
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

  const handleSelectOption = (amount) => {
    setSelectedOption(amount);
    localStorage.setItem('contribution_amount', amount);
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '70vh', px: 18 }}>
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
              <ContributionOption
                amount={option.amount}
                label={option.label}
                selected={selectedOption === option.amount}
                onSelect={handleSelectOption}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          * 10% of all contributions will be allocated to Arstrate-Archeives to support museums and preserve artifacts.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        
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
                  <ContributionOption
                    amount={option.amount}
                    label={option.label}
                    selected={selectedOption === option.amount}
                    onSelect={handleSelectOption}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              * 10% of all contributions will be allocated to Arstrate-Archeives to support museums and preserve artifacts.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
             
            </Box>
          </Paper>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const ContributionOption = ({ amount, label, selected, onSelect }) => {
  const isCustomAmount = amount === 'ADD ANOTHER AMOUNT';
  return (
    <Paper
      onClick={() => onSelect(amount)}
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: isCustomAmount ? 'transparent' : '#f5f5f5',
        border: selected ? '2px solid #B56C32' : isCustomAmount ? '1px dashed #ccc' : 'none',
        textAlign: 'center',
        minWidth: 150,
        height: 100,
        cursor: 'pointer',
      }}
    >
      <Typography variant="h6">{label}</Typography>
    </Paper>
  );
};

export default ContributionModel;
