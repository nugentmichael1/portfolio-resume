// Data Access Object for experience collection in Google's Firebase Firestore

const admin = require("firebase-admin")


class experienceDAO {
    static async getAll() {

        try {
            const snapshot = await admin.firestore().collection("WorkExperience").orderBy("Start", "desc").get()

            const results = snapshot.docs.map(doc => doc.data())

            return results
        }
        catch (error) {

            console.error(`Unable to access firestore collection "Work Experience", ${error}`)

            console.log(`Unable to access firestore collection "Work Experience", ${error}`)

            // return empty list
            return []
        }

    }
}

exports.api = experienceDAO