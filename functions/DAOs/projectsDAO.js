// Projects DAO (Data Access Object)

// Interacts with the Academic Projects data stored on Firebase's (Google) database service, Firestore.

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

class ProjectsDAO {
    static async getAll() {

        try {

            //debug
            console.log("Try statement of ProjectsDAO getAll().")

            // Access collection (table) and take snapshot
            const snapshot = await admin.firestore().collection("Projects").get();

            // Break each document of snapshot list into component pieces.
            const results = snapshot.docs.map(doc => doc.data())

            //debug
            // console.log(results)

            return results;
        }

        catch (error) {

            console.error(`ProjectsDAO caught ${error} in getAll()`)
            console.log(`ProjectsDAO cauht ${error} in getAll()`)

            //return empty list
            return []
        }
    }
}

exports.api = ProjectsDAO