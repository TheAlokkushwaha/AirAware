const admin = require('firebase-admin');
require('dotenv').config();
// const serviceAccount = require('../flightstatus-9543e-firebase-adminsdk-qlp19-c9ea380d63.json');
const serviceAccount=JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
