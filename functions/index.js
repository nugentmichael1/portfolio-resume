//Firebase Functions main file
//Contains all functions and their dependencies


// -- Dependencies --

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

//getData "module"
const getData = require("./getData/getData")

//Billing notifier "module"
const billingNotifier = require("./billingNotifier")

// import controller
const allCtrl2 = require("./getData/controllers/all2.controller")

// -- Functions -- 

// Database REST operations.
// exports.data = functions.https.onRequest(getData.expressApp)

//Callable Function
exports.dataCallable = functions.https.onCall(async (data, context) => {

    const allData = await allCtrl2.api.getAll();

    // console.log(allData)
    // console.log("test")
    return allData;
})

// Billing Notifier
exports.receiveBillingNotice = functions.pubsub.topic('billing-pubsub').onPublish(billingNotifier.receive)