// Work Experience routes


// Import express
const express = require("express")

// Controller for experience data
const experienceCtrl = require("../controllers/experience.controller")

const router = express.Router()

router.route("/all").get(experienceCtrl.api.getAll)

exports.router = router