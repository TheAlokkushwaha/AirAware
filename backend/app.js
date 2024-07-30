const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flights = require('./routes/flights');
const notifications = require('./routes/notifications');
const cors = require('cors'); 
const port = process.env.PORT || 5000;




const app = express();
// app.use(cors());
app.use(cors({
  origin: ['https://air-aware-mel5-66jxf4xzj-thealokkushwahas-projects.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// const mongoURL = 'mongodb://localhost:27017/flight_status';
const mongoURL = process.env.MONGODB_URI; // Use the environment variable


// Connect to MongoDB
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

app.use(bodyParser.json());

app.use('/api/flights', flights);
app.use('/api/notifications', notifications);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
