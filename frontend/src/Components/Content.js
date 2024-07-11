import React from 'react'

//components
import Footer from './Footer'
import Header from './Header'

//sections
import Skills from '../Pages/Skills'
import WorkExperience from '../Pages/WorkExperience';
import Education from '../Pages/Education'
import AcademicProjects from '../Pages/AcademicProjects'

//css
import "../CSS/Content.css"


function Content({ projectsData, languagesData, experienceData }) {
    return (
        <div id='content'>
            <Header />
            <AcademicProjects data={projectsData} />
            <Education />
            <Skills languagesData={languagesData} />
            <WorkExperience data={experienceData} />
            <Footer />
        </div>
    )
}

export default Content