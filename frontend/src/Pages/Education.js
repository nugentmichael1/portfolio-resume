// Education page - Only has information about Fresno State

//react
import React from 'react'

// CSS
import "../CSS/Education.css"

//Components
import Degree from "../Components/Degree"

const Education = () => {

    return (
        <div id='Education' className='section'>
            <h2>Education</h2>
            <Degree />
        </div>
    )
}

export default Education