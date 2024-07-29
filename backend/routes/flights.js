const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');


// Get all flights
router.get('/', flightController.getAllFlights);

// Get a specific flight by ID
router.get('/:flight_id', flightController.getFlightById);

// Create a new flight
router.post('/', flightController.createFlight);

// Update a flight
router.put('/:flight_id', flightController.updateFlight);

// Delete a flight
router.delete('/:flight_id', flightController.deleteFlight);

module.exports = router;
