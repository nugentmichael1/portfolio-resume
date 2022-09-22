
// -- Dependencies --

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

//Express
const express = require('express');

//Cors - Cross Origin Resource Sharing permission
const cors = require('cors');

// -----------------------


// -- Initializations --

// Initialize express app
const app = express();

// Firebase admin app (for firestore access)
admin.initializeApp();

// -----------------------


// enable CORS
app.use(cors({ origin: true }));


// -- Routes --

// Languages Route - Queries Firestore database for Languages collection's documents.
app.get('/getLanguages', (req, res) => {

    //debug info: alert console this function was called
    functions.logger.info("Firebase Functions call made to getLanguages().", { structuredData: true });

    //fill variable "languagesList" with Firebase data from collection "Languages"
    return admin.firestore().collection('Languages').get()

        //take snapshot of "Languages" collection
        .then(snapshot => {

            //Get data for each document of collection snapshot
            const languagesList = snapshot.docs.map(doc => doc.data())

            //terminate the function and send back data
            res.send(languagesList);
        })
})

// Projects Route - Queries Firestore database for Projects collection's documents.
app.get('/getProjects', (req, res) => {

    //debug info: alert console this function was called
    functions.logger.info("Firebase Functions call made to getProjects().", { structuredData: true });

    //send back data
    res.send("This will return projects data.")

});

// Export entire api as one Firebase Function
exports.api = functions.https.onRequest(app)

