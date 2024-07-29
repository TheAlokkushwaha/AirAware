const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Get all notifications
router.get('/', notificationController.getAllNotifications);

// Get notifications for a specific flight
router.get('/flight/:flight_id', notificationController.getNotificationsByFlightId);

// Create a new notification
router.post('/', notificationController.createNotification);

// Delete a notification
router.delete('/:notification_id', notificationController.deleteNotification);

module.exports = router;
