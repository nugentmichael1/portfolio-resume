// Controller for All data access

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

//import data access objects
const languagesDAO = require("../DAOs/languagesDAO")
const experienceDAO = require("../DAOs/experienceDAO")
const projectsDAO = require("../DAOs/projectsDAO")

class allCtrl {
    static async getAll(req, res, next) {

        functions.logger.info("Firebase Functions call made to get 'all' Firestore data.", { structuredData: true });

        const allData = {};

        //debug
        // console.log("Calling languagesDAO from 'allCtrl'")

        //Languages
        try {
            const languages = await languagesDAO.handler.getLanguages()

            //debug
            // console.log(languages)

            //add languages data to "all" collection
            allData.languages = languages
        }
        catch (error) {
            console.error("Failed to acuire languages from allCtrl.")
            console.log("Failed to acuire languages from allCtrl.")
        }


        //Work History
        const experience = await experienceDAO.api.getAll()
        //add work experience data to "all" collection
        allData.experience = experience

        //Academic Projects
        const projects = await projectsDAO.api.getAll()
        allData.projects = projects


        res.send(allData)
    }
}

exports.api = allCtrl