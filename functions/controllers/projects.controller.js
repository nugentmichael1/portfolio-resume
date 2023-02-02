// Projects Controller

// Dependencies  -------------------------

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

// Data Access Object

const academicProjectsDAO = require("../DAOs/projectsDAO")


// Controller class

class academicProjectsCtrl {
    static async getAll(req, res, next) {

        console.log("Access getAll() in academicProjectsCtrl")

        //debug info: alert Firebase Functions console this function was called
        functions.logger.info("Firebase Functions call made within academicProjectsCtrl::getAll().", { structuredData: true });

        const projectsList = await academicProjectsDAO.api.getAll()

        res.send(projectsList)

        return;

        // //access Firebase collection: "Projects"
        // return admin.firestore().collection('Projects').get()

        //     //take snapshot of "Projects" collections
        //     .then(snapshot => {

        //         //Get data for each document of collection snapshot
        //         const projectsList = snapshot.docs.map(doc => doc.data())

        //         //terminate function and send back data
        //         res.send(projectsList);
        //     })

    }
}

exports.api = academicProjectsCtrl

// router.route("/all").get((req, res, next) => {

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