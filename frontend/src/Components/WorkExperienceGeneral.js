// General Work Experience component

//react
import React, { useEffect, useState } from 'react'

//utility function
import experienceTable from '../Utility/experienceTable'

function WorkExperienceGeneral({ data }) {

  const [tbody, setTbody] = useState(<tbody><tr><td colSpan={5}>Fetching work experience data from backend.</td></tr></tbody>)


  useEffect(() => {

    if (data !== null) {
      //build table with experience data
      setTbody(experienceTable(data));
    }

  }, [data])


  // useEffect(() => {

  //   //retrieve experience data from session storage and build table
  //   const getExperience = () => {

  //     const experience = JSON.parse(sessionStorage.getItem("experienceGeneral"))

  //     //build table with experience data
  //     setTbody(experienceTable(experience));

  //     //remove event listener
  //     window.removeEventListener("allData", getExperience);

  //   }

  //   //check if session storage contains data.
  //   if (sessionStorage.getItem("experienceGeneral") != null)
  //     //use data to build table
  //     getExperience();
  //   else {
  //     //create event listener to alert when data arrives
  //     window.addEventListener("allData", getExperience)
  //   }

  // }, [])


  return (
    <>
      <table className='WorkExperienceGeneral'>
        <caption><h4>General</h4></caption>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>
        {tbody}
      </table>
    </>
  )
}

export default WorkExperienceGeneral