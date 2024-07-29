require('dotenv').config(); // Load environment variables from .env file
const nodemailer = require('nodemailer');

// Create a transporter object using your email service configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change this if you're using a different email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendMail;
