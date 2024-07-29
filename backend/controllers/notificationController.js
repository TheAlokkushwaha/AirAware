const Notification = require('../models/Notification.js');

// Get all notifications
exports.getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get notifications for a specific flight
exports.getNotificationsByFlightId = async (req, res) => {
  try {
    const notifications = await Notification.find({ flight_id: req.params.flight_id });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new notification
exports.createNotification = async (req, res) => {
  const notification = new Notification({
    notification_id: req.body.notification_id,
    flight_id: req.body.flight_id,
    message: req.body.message,
    timestamp: req.body.timestamp,
    method: req.body.method,
    recipient: req.body.recipient
  });
  try {
    const newNotification = await notification.save();
    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findOne({ notification_id: req.params.notification_id });
    if (notification == null) {
      return res.status(404).json({ message: 'Cannot find notification' });
    }
    await notification.remove();
    res.json({ message: 'Deleted notification' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
