// Function to retrieve all data from backend

//firebase admin configuation
import { functions, } from "../Configuration/firebaseConfig"
import { httpsCallable } from "firebase/functions";

const retrieveAllDataCallable = httpsCallable(functions, 'dataCallable');

const retrieveAllData = async () => {

    //route queries backend for all data
    const result = await retrieveAllDataCallable()

        //successful response
        .then((res) => {

            //separate data from response packet
            const allData = res.data

            //Set flag that all data has been retrieved for session.
            sessionStorage.setItem("allData", JSON.stringify(allData))

            return allData;

        })

        //error case
        .catch((err) => {
            console.error(`Failed to acquire all data within retrieveData(). ${err}`)
            console.log(`Failed to acquire all data within retrieveData(). ${err}`)
        })

    return result;
}


export default retrieveAllData