import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

//connect to firebase app via credentials, which are stored locally (not in git repository) in .env file.  Can be retrieved from firebase console (online).
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


async function getLanguagesFS() {

    console.log(firebaseConfig)

    try {
        //Get Languages collection from firestore
        const languagesCol = collection(db, 'Languages');

        //debug: show collection
        // console.log(languagesCol);

        //Get snapshot of Languages collection
        const languagesSnapshot = await getDocs(languagesCol);

        //debug: show snapshot
        // console.log(languagesSnapshot);

        //Get documents of Languages collection
        const languagesList = languagesSnapshot.docs.map(doc => doc.data());

        //debug: show documents
        // console.log(languagesList)

        //Return Languages documents as array
        return languagesList;

    } catch (e) {
        console.error(`Firestore call failed, ${e}`)
        console.log(`Error: Firestore call failed, ${e}`)

        return [];
    }



}

export default getLanguagesFS;