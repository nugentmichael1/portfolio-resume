// Function to retrieve all data from backend

//express configuation
import http from "../http-common"

const retrieveAllData = async () => {

    //route queries backend for all data
    await http.get("/all/")

        //successful response
        .then((res) => {

            //separate data from response packet
            const allData = res.data

            //Set flag that all data has been retrieved for session.
            sessionStorage.setItem("allData", "true")

            // ------------------------------------------
            //store each set of data into unique session variables (keys).  must be stringified

            //languages
            sessionStorage.setItem("languages", JSON.stringify(allData.languages))

            //work experience general
            sessionStorage.setItem("experienceGeneral", JSON.stringify(allData.experience.general))

            //work experience industry
            sessionStorage.setItem("experienceIndustry",JSON.stringify(allData.experience.industry))

            //academic projects
            sessionStorage.setItem("projects", JSON.stringify(allData.projects))

            // ----------------------------------------

            //dispatch event to alert data dependent components
            window.dispatchEvent(new Event('allData'))

        })

        //error case
        .catch((err) => {
            console.error(`Failed to acquire all data within retrieveData(). ${err}`)
            console.log(`Failed to acquire all data within retrieveData(). ${err}`)
        })
}


export default retrieveAllData