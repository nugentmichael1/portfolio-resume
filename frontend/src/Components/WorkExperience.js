// General Work Experience component

//react
import React, { useEffect, useState } from 'react'

//utility function
import experienceTable from '../Utility/experienceTable'

function WorkExperience({ data, name }) {

  const [tbody, setTbody] = useState(<tbody><tr><td colSpan={5}>Please wait a few seconds while Google Firebase initializes a backend instance.</td></tr></tbody>)

  useEffect(() => {

    if (data !== null) {

      //build table with experience data
      setTbody(experienceTable(data));
    }

  }, [data])

  const className = 'WorkExperience' + name;

  return (
    <>
      <table className={className}>
        <caption><h4>{name}</h4></caption>
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