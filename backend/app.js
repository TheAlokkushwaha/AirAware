const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flights = require('./routes/flights');
const notifications = require('./routes/notifications');
// const cors = require('cors'); 
const port = process.env.PORT || 5000;

const app = express();
function setCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(204); // No Content
  } else {
    next();
  }
}

app.use(setCorsHeaders);

app.use(bodyParser.json());


const mongoURL = process.env.MONGODB_URI;

mongoose.connect(mongoURL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err.message);
});


app.use('/api/flights', flights);
app.use('/api/notifications', notifications);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
