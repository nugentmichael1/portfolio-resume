//Firebase Functions main file
//Contains all functions and their dependencies


// -- Dependencies --

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

//getData "module"
const getData = require("./getData/getData")

//Billing notifier "module"
const billingNotifier = require("./billingNotifier")


// -- Functions -- 

// Database REST operations.
exports.data = functions.https.onRequest(getData.expressApp)

// Billing Notifier
exports.receiveBillingNotice = functions.pubsub.topic('billing-pubsub').onPublish(billingNotifier.receive)