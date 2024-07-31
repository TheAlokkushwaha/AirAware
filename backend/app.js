const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flights = require('./routes/flights');
const notifications = require('./routes/notifications');
const cors = require('cors'); 
const port = process.env.PORT || 5000;

const app = express();

// CORS Headers Middleware
app.use(cors());

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
