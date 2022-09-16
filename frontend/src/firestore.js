import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
        const languagesCol = collection(db, 'Languages');
        console.log(languagesCol);
        const languagesSnapshot = await getDocs(languagesCol);
        console.log(languagesSnapshot);
        const languagesList = languagesSnapshot.docs.map(doc => doc.data());
        console.log(languagesList)

        return languagesList;

    } catch (e) {
        console.error(`Firestore call failed, ${e}`)
        console.log(`Error: Firestore call failed, ${e}`)

        return [];
    }



}

export default getLanguagesFS;