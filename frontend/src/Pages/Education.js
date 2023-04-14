// Education page - Only has information about Fresno State

//react
import React from 'react'

// CSS
import "../CSS/Education.css"

//Components
import AcademicProjects from '../Components/AcademicProjects'
import Degree from "../Components/Degree"

const Education = () => {

    return (<div className='education'>
        <Degree />

        <AcademicProjects />

    </div>
    )
}

export default Education