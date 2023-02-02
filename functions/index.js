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

// Languages router
const languages = require("./routes/languages.route")

// Projects router
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
app.get('/all', (req, res) => {
    functions.logger.info("Firebase Functions call made to get all Firestore data.", { structuredData: true });

    const all_data = [];
    //Languages
    //all_data.push(await getLanguages())
    //Academic Projects
    //all_data.push(await getAcademicProjects())
    //Work History
    //all_data.push(await getWorkHistory())

})

// Languages Route
app.use("/languages", languages.router);

// Academic Projects Route
app.use("/projects", projects.router);

//404 for anything other route
app.use("*", (req, res) => res.status(404).json({ error: "Firebase functions accessed, but argument route has no match." }))


// Export entire express app as one Firebase Function
exports.data = functions.https.onRequest(app)

