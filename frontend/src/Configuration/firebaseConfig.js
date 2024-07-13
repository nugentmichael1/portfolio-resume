
import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "firebase/storage";

//connect to firebase app via credentials, which are stored locally (not in git repository) in .env file.  Can be retrieved from firebase console (firebase.google.com).
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}


//Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize (callable) Cloud Functions 
const functions = getFunctions(app);

//Initialize storage
const storage = getStorage(app);

// Change this to match process.env like with storage?
// if (window.location.hostname === 'localhost') {
//     connectFunctionsEmulator(functions, 'localhost', 5001);
// }


// Set backend to emulator in development
if (process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost') {
    connectStorageEmulator(storage, "localhost", 9199);
    connectFunctionsEmulator(functions, 'localhost', 5001);
}

export { functions, storage };
