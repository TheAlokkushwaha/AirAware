const mongoose = require('mongoose');
const Flight = require('./models/Flight');
const Notification = require('./models/Notification');

const mongoURL = 'mongodb://localhost:27017/flight_status';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    importData();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

const flightData = [
  {
    flight_id: "6E 2341",
    airline: "Indigo",
    status: "On Time",
    departure_gate: "A12",
    arrival_gate: "B7",
    scheduled_departure: "2024-07-26T14:00:00Z",
    scheduled_arrival: "2024-07-26T18:00:00Z",
    actual_departure: null,
    actual_arrival: null
  },
  {
    flight_id: "6E 2342",
    airline: "Indigo",
    status: "Delayed",
    departure_gate: "C3",
    arrival_gate: "D4",
    scheduled_departure: "2024-07-26T16:00:00Z",
    scheduled_arrival: "2024-07-26T20:00:00Z",
    actual_departure: null,
    actual_arrival: null
  },
  {
    flight_id: "6E 2343",
    airline: "Indigo",
    status: "Cancelled",
    departure_gate: "E2",
    arrival_gate: "F1",
    scheduled_departure: "2024-07-26T12:00:00Z",
    scheduled_arrival: "2024-07-26T16:00:00Z",
    actual_departure: null,
    actual_arrival: null
  },
  {
    flight_id: "6E 2344",
    airline: "Indigo",
    status: "On Time",
    departure_gate: "A5",
    arrival_gate: "B3",
    scheduled_departure: "2024-07-27T10:00:00Z",
    scheduled_arrival: "2024-07-27T14:00:00Z",
    actual_departure: null,
    actual_arrival: null
  },
  {
    flight_id: "6E 2345",
    airline: "Indigo",
    status: "Delayed",
    departure_gate: "C2",
    arrival_gate: "D5",
    scheduled_departure: "2024-07-27T11:00:00Z",
    scheduled_arrival: "2024-07-27T15:00:00Z",
    actual_departure: null,
    actual_arrival: null
  },
  {
    flight_id: "6E 2346",
    airline: "Indigo",
    status: "Cancelled",
    departure_gate: "E4",
    arrival_gate: "F3",
    scheduled_departure: "2024-07-27T09:00:00Z",
    scheduled_arrival: "2024-07-27T13:00:00Z",
    actual_departure: null,
    actual_arrival: null
  }
];

const notificationData = [
  {
    notification_id: "1",
    flight_id: "6E 2341",
    message: "Your flight 6E 2341 is on time. Departure gate: A12.",
    timestamp: "2024-07-26T13:00:00Z",
    method: "SMS",
    recipient: "+1234567890"
  },
  {
    notification_id: "2",
    flight_id: "6E 2342",
    message: "Your flight 6E 2342 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
    timestamp: "2024-07-26T15:30:00Z",
    method: "Email",
    recipient: "user@example.com"
  },
  {
    notification_id: "3",
    flight_id: "6E 2343",
    message: "Your flight 6E 2343 has been cancelled.",
    timestamp: "2024-07-26T11:00:00Z",
    method: "App",
    recipient: "user_app_id_12345"
  },
  {
    notification_id: "4",
    flight_id: "6E 2344",
    message: "Your flight 6E 2344 is on time. Departure gate: A5.",
    timestamp: "2024-07-27T09:00:00Z",
    method: "SMS",
    recipient: "+1234567891"
  },
  {
    notification_id: "5",
    flight_id: "6E 2345",
    message: "Your flight 6E 2345 is delayed. New departure time: 2024-07-27T12:00:00Z. Departure gate: C2.",
    timestamp: "2024-07-27T10:30:00Z",
    method: "Email",
    recipient: "user2@example.com"
  },
  {
    notification_id: "6",
    flight_id: "6E 2346",
    message: "Your flight 6E 2346 has been cancelled.",
    timestamp: "2024-07-27T08:00:00Z",
    method: "App",
    recipient: "user_app_id_12346"
  }
];

async function importData() {
  try {
    await Flight.deleteMany({});
    await Notification.deleteMany({});
    
    await Flight.insertMany(flightData);
    await Notification.insertMany(notificationData);

    console.log('Data imported successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error importing data:', err.message);
    mongoose.connection.close();
  }
}
