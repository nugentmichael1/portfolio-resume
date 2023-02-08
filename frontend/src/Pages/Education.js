// Education page - Only has information about Fresno State

//react
import React from 'react'

// CSS
import "../CSS/Education.css"

//Components
import AcademicProjects from '../Components/AcademicProjects'
import Degree from "../Components/Degree"

const Education = () => {

    // const eDiplomaOpen = () => {
    //     fetch('eDiploma.pdf').then(response => {
    //         response.blob().then(blob => {
    //             const fileURL = window.URL.createObjectURL(blob);
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             // alink.download = 'eDiploma.pdf';
    //             alink.click();
    //         })
    //     })
    // }

    return (<div className='education'>
        <Degree />

        <AcademicProjects />

    </div>
    )
}

export default Education