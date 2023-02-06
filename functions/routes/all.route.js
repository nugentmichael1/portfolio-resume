// All Data route

//import express
const express = require("express")

// access router from express
const router = express.Router()

// import controller
const allCtrl = require("../controllers/all.controller")

// Default route
router.route("/").get(allCtrl.api.getAll)

exports.router = router