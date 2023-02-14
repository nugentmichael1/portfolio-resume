import React from 'react'

// Components
import Languages from '../Components/Languages'
import SoftSkills from '../Components/SoftSkills'

// CSS
import '../CSS/Skills.css'

function Skills() {
    return (
        <div className='Skills'>
            {/* <h1>Skills</h1> */}
            <Languages />
            <SoftSkills />
        </div>
    )
}

export default Skills