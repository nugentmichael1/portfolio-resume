// Work Experience page

//react
import React, { useEffect, useState } from 'react'

//css
import "../CSS/WorkExperience.css"

// components
import WorkExperience from '../Components/WorkExperience'

function WorkExperienceSection({ data }) {


  const [industryData, setIndustryData] = useState(null)

  const [generalData, setGeneralData] = useState(null)

  useEffect(() => {
    if (data !== null) {
      setIndustryData(data.industry)
      setGeneralData(data.general)
    }
  }, [data])

  return (
    <div id='Work_Experience' className='section'>
      <h1 className='pageh1'>Work Experience</h1>
      <WorkExperience data={industryData} name="Industry-Relevant" />
      <WorkExperience data={generalData} name="General" />
    </div>
  )
}

export default WorkExperienceSection