// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();



// ----------- Exported Functions ("Routes") ------------

// Langauges "Route".
// Queries Firestore database for Languages collection's documents.
exports.getLanguages = functions.https.onRequest(async (req, res) => {

    //debug info: alert console this function was called
    functions.logger.info("Firebase Functions call made to getLanguages().", { structuredData: true });

    //declare variable that will hold list of langauges
    let languagesList;

    //fill varaible "languagesList" with Firebase data from collection "Languages"
    await admin.firestore().collection('Languages').get()
    
        //take snapshot of "Languages" collection
        .then(snapshot => {

            //Get data for each document of collection snapshot
            languagesList = snapshot.docs.map(doc => doc.data())
        })

    //return list of languages to client
    res.send(languagesList);
})

// Projects "Route".
// Queries Firestore database for Projects collection's documents.
exports.getProjects = functions.https.onRequest((req, res) => {
    functions.logger.info("Firebase Functions call made to getProjects().", { structuredData: true });
    res.send("This will return projects data.")

})