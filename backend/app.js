const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flights = require('./routes/flights');
const notifications = require('./routes/notifications');
const cors = require('cors'); // Import cors

const app = express();
app.use(cors());
// Update MongoDB connection URL as needed
const mongoURL = 'mongodb://localhost:27017/flight_status';

// Connect to MongoDB
mongoose.connect(mongoURL, { 
  // Remove deprecated options
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err.message);
});

app.use(bodyParser.json());

app.use('/api/flights', flights);
app.use('/api/notifications', notifications);


module.exports = app;
