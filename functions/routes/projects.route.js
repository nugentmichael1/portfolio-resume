const express = require("express");


// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');


const router = express.Router()

// Queries Firestore database for and returns all Projects collection's documents.
router.route("/all").get((req, res, next) => {

    //debug info: alert console this function was called
    functions.logger.info("Firebase Functions call made to get projects.", { structuredData: true });

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

exports.router = router;