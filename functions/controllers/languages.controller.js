//Languages Controller

// Dependencies  -------------------------

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

const LanguagesDAO = require("../DAOs/languagesDAO")


// Controller class

const apiGetLanguages = async function (req, res, next) {

    //debug info: alert console this function was called
    functions.logger.info("Call made to languages DAO.", { structuredData: true });

    //debug
    // console.log(LanguagesDAO)
    // console.log(LanguagesDAO.handler)
    // console.log(LanguagesDAO.handler.getLanguages)

    const result = await LanguagesDAO.handler.getLanguages()

    //debug
    // console.log(result)

    res.json(result)
}

exports.apiGetLanguages = apiGetLanguages;