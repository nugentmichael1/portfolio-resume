const express = require("express")

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

const router = express.Router()

// Languages Route - Queries Firestore database for Languages collection's documents.
router.route("/").get(((req, res, next) => {

    //debug info: alert console this function was called
    functions.logger.info("Firebase Functions call made to get languages.", { structuredData: true });

    //access Firebase collection: "Languages"
    return admin.firestore().collection('Languages').get()

        //take snapshot of "Languages" collection
        .then(snapshot => {

            //Get data for each document of collection snapshot
            const languagesList = snapshot.docs.map(doc => doc.data())

            //terminate the function and send back data
            res.send(languagesList);
        })
}))

exports.handler = router;