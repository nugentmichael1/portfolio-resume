// Work Experience page

//react
import React from 'react'

//css
import "../CSS/WorkExperience.css"

// components
import WorkExperienceGeneral from '../Components/WorkExperienceGeneral'
import WorkExperienceIndustry from '../Components/WorkExperienceIndustry'

function WorkExperience() {

  return (
    <div className='WorkExperience'>
      <WorkExperienceIndustry />
      <WorkExperienceGeneral />
    </div>
  )
}

export default WorkExperience