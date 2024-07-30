const admin = require('firebase-admin');
// const serviceAccount = require('../flightstatus-9543e-firebase-adminsdk-qlp19-c9ea380d63.json');
const serviceAccount=process.env.FIREBASE_SERVICE_ACCOUNT_KEY

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
