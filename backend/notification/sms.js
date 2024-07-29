// sms.js
const twilio = require('twilio');

const client = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

const sendSMS = (to, body) => {
  return client.messages.create({
    body,
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    to
  });
};

module.exports = { sendSMS };
