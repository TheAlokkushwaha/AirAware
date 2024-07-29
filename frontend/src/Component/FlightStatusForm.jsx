import React from 'react';
import {Typography } from '@mui/material';

// import { TextField, Button, Grid, Box, Typography } from '@mui/material';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FlightStatusForm = () => {
  // const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '110vh',
        backgroundImage: 'url("https://www.goindigo.in/content/dam/s6web/in/en/assets/paris.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '35%',
          width: '100%',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" style={{ fontWeight: 'bold' }}>
          Explore the world together
        </Typography>
        <Typography variant="h6" style={{ marginTop: 10 }}>
          You can now track the live status of domestic and international flights.
        </Typography>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '0%',
          backgroundColor: 'white',
        }}
      >
        {/* <Box
          className="bg-white p-8 rounded-xl shadow-lg"
          sx={{
            boxShadow: 3,
            p: { xs: 2, sm: 4, md: 8 },
            position: 'relative',
            top: '-135px',
            width: '90%',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          <Typography
            variant="h5"
            className="font-bold text-center"
            sx={{ marginBottom: 4 }}
          >
            Enter flight details to check your flight status
          </Typography>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Departing"
                  fullWidth
                  variant="outlined"
                  aria-label="Departing location"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Arriving"
                  fullWidth
                  variant="outlined"
                  aria-label="Arriving location"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Flight"
                  fullWidth
                  variant="outlined"
                  aria-label="Flight number"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="PNR/Booking Ref."
                  fullWidth
                  variant="outlined"
                  aria-label="Booking reference"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ backgroundColor: '#06009F', color: 'white' }}
                  aria-label="Search flight"
                >
                  Search Flight
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box> */}
      </div>
    </div>
  );
};

export default FlightStatusForm;
