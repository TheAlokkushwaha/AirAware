const admin = require('firebase-admin');
const serviceAccount = require('../flightstatus-9543e-firebase-adminsdk-qlp19-c9ea380d63.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const sendFirebaseMessage = (registrationToken, payload) => {
//   return admin.messaging().sendToDevice(registrationToken, payload);
// };

// module.exports = sendFirebaseMessage;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
