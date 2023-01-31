// Languages Route - While only one route (a read operation) is needed for this database, this file can be used to expand the CRUD operations.

// Import express
const express = require("express")

// Import languages controller object
const languagesCtrl = require("../controllers/languages.controller")


// --------------------------

// Load router from express
const router = express.Router()

// --------------------------


// Queries database for and returns all of Languages collection's documents.
router.route("/all").get(languagesCtrl.apiGetLanguages)

// Firebase functions export syntax
exports.router = router;