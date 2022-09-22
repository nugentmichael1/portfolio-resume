// This is the main file for Firebase Functions.


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

    //access Firebase collection: "Languages"
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

    //access Firebase collection: "Projects"
    return admin.firestore().collection('Projects').get()

        //take snapshot of "Projects" collections
        .then(snapshot => {

            //Get data for each document of collection snapshot
            const projectsList = snapshot.docs.map(doc => doc.data())

            //terminate function and send back data
            res.send(projectsList);
        })
});

//"Error: Not Found" route for anything else
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))



// Export entire api as one Firebase Function
exports.api = functions.https.onRequest(app)

