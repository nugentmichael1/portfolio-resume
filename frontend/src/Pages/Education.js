import React from 'react'
import '../CSS/Education.css'
import eDiploma from '../Components/eDiploma.pdf'
import AcademicProjects from '../Components/AcademicProjects'

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
        <ul className='csuf'>
            <li className='degree'>BS Computer Science</li>
            <li className='school'><a href="https://csm.fresnostate.edu/csci/index.html">California State University, Fresno</a></li>
            <li className='gradDate'>August 2022</li>
            <li className='honors'>magna cum laude</li>
            {/* <li className='eDiploma'><button onClick={eDiplomaOpen}>eDiploma</button></li> */}
            <li><a href={eDiploma} target="_blank" rel='noreferrer'>eDiploma</a></li>
        </ul>

        <AcademicProjects />

    </div>
    )
}

export default Education