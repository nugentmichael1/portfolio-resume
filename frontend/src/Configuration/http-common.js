import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:5000/api/v1/",
    //baseURL: "https://us-central1-portfolio-688a4.cloudfunctions.net/",
    baseURL: (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_EMULATOR_FUNCTIONS_URL : process.env.REACT_APP_FIREBASE_FUNCTIONS_URL,
    headers: {
        "Content-type": "application/json"
    }
})