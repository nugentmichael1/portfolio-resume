// Work Experience page

//react
import React, { useEffect, useState } from 'react'

//css
import "../CSS/WorkExperience.css"

// components
import WorkExperienceGeneral from '../Components/WorkExperienceGeneral'
import WorkExperienceIndustry from '../Components/WorkExperienceIndustry'

function WorkExperience({ data }) {


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
      <WorkExperienceIndustry data={industryData} />
      <WorkExperienceGeneral data={generalData} />
    </div>
  )
}

export default WorkExperience