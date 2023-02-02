// Projects Controller

// Dependencies  -------------------------

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// Data Access Object
const academicProjectsDAO = require("../DAOs/projectsDAO")

// -------------------------------

// Controller class
class academicProjectsCtrl {
    static async getAll(req, res, next) {

        console.log("Access getAll() in academicProjectsCtrl")

        //debug info: alert Firebase Functions console this function was called
        functions.logger.info("Firebase Functions call made within academicProjectsCtrl::getAll().", { structuredData: true });

        const projectsList = await academicProjectsDAO.api.getAll()

        res.send(projectsList)

        return;

    }
}

exports.api = academicProjectsCtrl
