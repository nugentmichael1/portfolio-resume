import React, { useEffect, useState } from 'react'
import http from "../http-common"

const createMonthYearStr = (seconds) => {

  const dateObj = new Date(seconds * 1000)

  const month = dateObj.getMonth()

  const year = dateObj.getFullYear()

  return <>{month}/{year}</>
}

function WorkExperience() {

  const [tbody, setTbody] = useState(<tbody><tr><td>test</td></tr></tbody>)

  useEffect(() => {
    const retrieveWorkExperience = async () => {
      await http.get("experience/all")
        .then((res) => {

          //debug
          // console.log(res.data)

          buildTable(res.data)

          return
        })
        .catch((error) => {

          console.error(`Failed to acquire work experience data: ${error}`)

          return
        })
    }
    retrieveWorkExperience()
  }, [])

  const buildTable = (records) => {
    // console.log("buildTable()",records)

    //create table body
    const tbody = []

    for (const record in records) {

      console.log(records[record].Start)
      console.log(new Date(records[record].Start._seconds * 1000))


      //create table row
      const tr = []

      //start date
      //properly format
      const monthYearStr_start = createMonthYearStr(records[record].Start._seconds)
      //push onto table row
      tr.push(<td key="0">{monthYearStr_start}</td>)

      //end date
      //propery format
      const monthYearStr_end = createMonthYearStr(records[record].End._seconds)
      //push onto table row
      tr.push(<td key="1">{monthYearStr_end}</td>)

      //title
      tr.push(<td>{records[record].Title}</td>)

      //Company
      tr.push(<td>{records[record].Company}</td>)

      //Location
      tr.push(<td>{records[record].Location}</td>)

      //Description
      tr.push(<td>{records[record].Description}</td>)


      //push completed table row into table body
      tbody.push(<tr key={record}>{tr}</tr>)
    }
    setTbody(<tbody>{tbody}</tbody>)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        {tbody}
      </table>
    </>
  )
}

export default WorkExperience