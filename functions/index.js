// This is the main file for Firebase Functions.  It is akin to the backend or server of a traditional MERN stack.


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

const languages = require("./routes/languages.route")

const projects = require("./routes/projects.route")

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
app.get('/all_data', (req, res) => {
    functions.logger.info("Firebase Functions call made to get all Firestore data.", { structuredData: true });

    const all_data = [];
    //Languages
    //all_data.push(await getLanguages())
    //Academic Projects
    //all_data.push(await getAcademicProjects())
    //Work History
    //all_data.push(await getWorkHistory())

})

// Languages Route - Queries Firestore database for Languages collection's documents.
// app.get('/languages', (req, res) => {

//     //debug info: alert console this function was called
//     functions.logger.info("Firebase Functions call made to get languages.", { structuredData: true });

//     //access Firebase collection: "Languages"
//     return admin.firestore().collection('Languages').get()

//         //take snapshot of "Languages" collection
//         .then(snapshot => {

//             //Get data for each document of collection snapshot
//             const languagesList = snapshot.docs.map(doc => doc.data())

//             //terminate the function and send back data
//             res.send(languagesList);
//         })
// })

// Projects Route - Queries Firestore database for Projects collection's documents.
// app.get('/projects', (req, res) => {

//     //debug info: alert console this function was called
//     functions.logger.info("Firebase Functions call made to get projects.", { structuredData: true });

//     //access Firebase collection: "Projects"
//     return admin.firestore().collection('Projects').get()

//         //take snapshot of "Projects" collections
//         .then(snapshot => {

//             //Get data for each document of collection snapshot
//             const projectsList = snapshot.docs.map(doc => doc.data())

//             //terminate function and send back data
//             res.send(projectsList);
//         })
// });

// Languages Route - Queries Firestore database for Languages collection's documents.
app.use("/languages", languages.handler);

// Projects Route - Queries Firestore database for Projects collection's documents.
app.use("/projects", projects.handler);

//"Error: Not Found" route for anything else
app.use("*", (req, res) => res.status(404).json({ error: "Firebase functions accessed, but queried route is undefined." }))


// Export entire api as one Firebase Function
exports.api = functions.https.onRequest(app)

