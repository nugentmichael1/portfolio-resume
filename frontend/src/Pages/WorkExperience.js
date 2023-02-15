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