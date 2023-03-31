// Languages Data Access Object -- currently set to access Google's Firestore database service

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

class LanguagesDAO {
    static async getLanguages() {

        try {

            //debug
            // console.log("Try statement of LanguagesDAO.getLanguages()")

            //take snapshot of collection
            const snapshot = await admin.firestore().collection('Languages').get()

            // Get data of each document and put into list as separate object
            const results = snapshot.docs.map(doc => doc.data())

            // //debug
            // console.log(results)

            return results

        } catch (error) {

            console.error(`Unable to access Firestore collection 'Languages,' ${e}`)

            console.log(`Error: Unable to access Firestore collection 'Languages,' ${e}`)

            return []
        }
    }
}

exports.handler = LanguagesDAO