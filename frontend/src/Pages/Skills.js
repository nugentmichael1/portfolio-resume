import React from 'react'

// Components
import Languages from '../Components/Skills/Languages'
import Soft from '../Components/Skills/Soft'
import WebDevelopment from '../Components/Skills/WebDevelopment'
import SoftwareEngineering from '../Components/Skills/SoftwareEngineering'

// CSS
import '../CSS/Skills.css'

function Skills({ languagesData }) {
    return (
        <div id='Skills' className='section'>
            <h1 className='pageh1'>Skills</h1>
            <div className='SkillsTables'>
                <Languages data={languagesData} />
                <WebDevelopment />
                <SoftwareEngineering />
                <Soft />
            </div>
        </div>
    )
}

export default Skills