import React from 'react'

// Components
import Languages from '../Components/Skills/Languages'
import Soft from '../Components/Skills/Soft'
import WebDevelopment from '../Components/Skills/WebDevelopment'
import SoftwareEngineering from '../Components/Skills/SoftwareEngineering'

// CSS
import '../CSS/Skills.css'

function Skills() {
    return (
        <div className='Skills'>
            {/* <h1>Skills</h1> */}
            <Languages />
            <WebDevelopment />
            <SoftwareEngineering />
            <Soft />
        </div>
    )
}

export default Skills