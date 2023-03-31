// This is the main file for Firestore access.  It is the Firebase Functions version of a backend MERN stack because of a reliance on express.


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


// Export entire express app
exports.expressApp = app;