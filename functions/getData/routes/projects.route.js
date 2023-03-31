// Routes for Academic Projects data.  Only consists of CRUD operations.

// Import express
const express = require("express");

// Import controller for Academic Projects
const academicProjectsCtrl = require("../controllers/projects.controller")


// --------------------------

// Load express router inorder to overload with new routes
const router = express.Router()

// --------------------------

// Queries data for and returns all Academic Projects collection's documents.
router.route("/all").get(academicProjectsCtrl.api.getAll)

// Export overloaded express router (Firebase functions export syntax)
exports.router = router;