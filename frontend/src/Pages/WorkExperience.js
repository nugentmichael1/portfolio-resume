// Work Experience page

//react
import React, { useEffect, useState } from 'react'

//css
import "../CSS/WorkExperience.css"

//Utility function to format date
import createMonthYearStr from '../Utility/createMonthYearStr'

function WorkExperience() {

  const [tbody, setTbody] = useState(<tbody><tr><td colSpan={5}>Fetching work experience data from backend.</td></tr></tbody>)

  useEffect(() => {

    //retrieve experience data from session storage and build table
    const getExperience = () => {

      const experience = JSON.parse(sessionStorage.getItem("experience"))

      //build table with experience data
      buildTable(experience);

      //remove event listener
      window.removeEventListener("allData", getExperience);

    }

    //check if session storage contains data.
    if (sessionStorage.getItem("experience") != null)
      //use data to build table
      getExperience();
    else {
      //create event listener to alert when data arrives
      window.addEventListener("allData", getExperience)
    }

  }, [])

  const buildTable = (records) => {

    //create table body
    const tbody = []

    for (const record in records) {

      //establish odd or even record (for css class)
      const oddXorEven = (record % 2 === 0) ? "odd" : "even"

      //create table row
      const tr = []

      //start date
      //properly format
      const monthYearStr_start = createMonthYearStr(records[record].Start._seconds)
      //push onto table row
      tr.push(<td key="start">{monthYearStr_start}</td>)

      //end date
      //propery format
      const monthYearStr_end = createMonthYearStr(records[record].End._seconds)
      //push onto table row
      tr.push(<td key="end">{monthYearStr_end}</td>)

      //title
      tr.push(<td key="title">{records[record].Title}</td>)

      //Company
      tr.push(<td key="company">{records[record].Company}</td>)

      //Location
      tr.push(<td key="location">{records[record].Location}</td>)




      //push completed table row into table body
      tbody.push(<tr key={record} className={oddXorEven}>{tr}</tr>)

      //Description
      tbody.push(<tr key={record + "description"} className={oddXorEven}><td className="description" colSpan={5}>&emsp;{records[record].Description}</td></tr>)

      //debug
      // console.log(tbody)

    }


    setTbody(<tbody>{tbody}</tbody>)
  }

  return (
    <>
      <table className='WorkExperience'>
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

export default WorkExperience



 // const retrieveWorkExperience = async () => {
    //   await http.get("experience/all")
    //     .then((res) => {

    //       //debug
    //       // console.log(res.data)

    //       buildTable(res.data)

    //       return
    //     })
    //     .catch((error) => {

    //       console.error(`Failed to acquire work experience data: ${error}`)

    //       return
    //     })
    // }
    // retrieveWorkExperience()