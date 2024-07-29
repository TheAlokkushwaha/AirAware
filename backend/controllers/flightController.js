const Flight = require('../models/Flight.js');
const sendMail = require('../notification/mailer.js'); // Adjust the path as needed
const admin = require('../config/firebase'); // Firebase admin SDK

// Get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific flight by ID
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findOne({ flight_id: req.params.flight_id });
    if (flight == null) {
      return res.status(404).json({ message: 'Cannot find flight' });
    }
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new flight
exports.createFlight = async (req, res) => {
  const flight = new Flight({
    flight_id: req.body.flight_id,
    airline: req.body.airline,
    status: req.body.status,
    departure_gate: req.body.departure_gate,
    arrival_gate: req.body.arrival_gate,
    scheduled_departure: req.body.scheduled_departure,
    scheduled_arrival: req.body.scheduled_arrival,
    actual_departure: req.body.actual_departure,
    actual_arrival: req.body.actual_arrival
  });
  try {
    const newFlight = await flight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a flight
exports.deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findOne({ flight_id: req.params.flight_id });
    if (flight == null) {
      return res.status(404).json({ message: 'Cannot find flight' });
    }
    await flight.remove();
    res.json({ message: 'Deleted flight' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a flight
exports.updateFlight = async (req, res) => {
  try {
    // Find the flight by ID
    const flight = await Flight.findOne({ flight_id: req.params.flight_id });
    if (!flight) {
      return res.status(404).json({ message: 'Cannot find flight' });
    }

    // Save old values for comparison
    const oldStatus = flight.status;
    const oldDepartureTime = flight.departure_time;
    const oldDepartureGate = flight.departure_gate;

    // Update flight details
    Object.assign(flight, req.body);
    await flight.save();

    // Determine if any relevant fields have changed
    let notify = false;
    let emailSubject = 'Flight Information Update';
    let emailBody = `Your flight ${flight.flight_id} has been updated with the following changes:\n\n`;

    if (oldStatus !== flight.status) {
      notify = true;
      emailBody += `- Status updated to: ${flight.status}\n`;
    }

    if (oldDepartureTime !== flight.departure_time) {
      notify = true;
      emailBody += `- Departure time updated to: ${flight.departure_time}\n`;
    }

    if (oldDepartureGate !== flight.departure_gate) {
      notify = true;
      emailBody += `- Departure gate updated to: ${flight.departure_gate}\n`;
    }

    if (notify) {
      // Send notification email
      await sendMail('alokkushwaha1005@gmail.com', emailSubject, emailBody);

      // Firebase notification
      const registrationToken = 'user-firebase-registration-token'; // Fetch the user's registration token from the database
      const payload = {
        notification: {
          title: 'Flight Information Update',
          body: `Flight ${flight.flight_id} has been updated. Check your email for details.`,
        },
      };
      await admin.messaging().sendToDevice(registrationToken, payload);
    }

    res.json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

