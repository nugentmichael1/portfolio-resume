// This is the main file for Firebase Functions.  It is akin to the backend or server of a traditional MERN stack.


// -- Dependencies --

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");


//slack firebase billing notifier stuff
//debug tool for base64 decode of Google's pubsub messages
const util = require('util');
//Sends messages to a slack channel as a bot based on a supplied url
const { IncomingWebhook } = require('@slack/webhook');


// The Firebase Admin SDK to access Firestore.  Only used for initialization.
const admin = require('firebase-admin');

//Express
const express = require('express');

//Cors - Cross Origin Resource Sharing permission
const cors = require('cors');

// -----------------------

// Languages router
const languages = require("./routes/languages.route")

// Work Experience router
const experience = require("./routes/experience.route")

// Projects router
const projects = require("./routes/projects.route")

// All Data router
const all = require("./routes/all.route")

// -- Initializations --

// Initialize express app
const app = express();

// Firebase admin app (for firestore access)
admin.initializeApp();

// -----------------------


// enable CORS
app.use(cors({ origin: true }));


// -- Routes --

// All Data Route - 
app.use('/all', all.router)

// Languages Route
app.use("/languages", languages.router);

// Work Experience Route
app.use("/experience", experience.router);

// Academic Projects Route
app.use("/projects", projects.router);

//404 for anything other route
app.use("*", (req, res) => res.status(404).json({ error: "Firebase functions accessed, but argument route has no match." }))


// Export entire express app as one Firebase Function
exports.data = functions.https.onRequest(app)

// Billing Notifier
exports.receiveBillingNotice = functions.pubsub.topic('billing-pubsub').onPublish(async (message) => {

    //debug
    console.log("Inside 'recieveBillingNotice function'")
    console.log(message);

    //these messages are base64 encoded
    const data = message.json;

    //Can be seen in firebase console's function logs
    console.log(`Here is your pubsub data: ${util.inspect(data)}`);

    return handlePubSub(data);
})

async function handlePubSub(pubSubData) {

    //Load url from environment variables
    const url = process.env.SLACK_WEBHOOK_URL;
    const webhook = new IncomingWebhook(url);

    //Create message to send
    const messageString = `${pubSubData.budgetDisplayName} has incurred a total cost of ${pubSubData.costAmount} ${pubSubData.currencyCode}`;

    //Send message to slack channel
    await webhook.send({ text: messageString })
}