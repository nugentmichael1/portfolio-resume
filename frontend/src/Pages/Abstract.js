import React from "react";
import { Link } from "react-router-dom"

//css
import "../CSS/Abstract.css"

import MaskExperiment from "../Components/MaskExperiment"
import "../CSS/MaskExperiment.css"

function Abstract() {
    return (
        <div className='abstract'>
            {/* <h1>Michael Nugent</h1> */}
            <MaskExperiment />
            <h2>Associate Software Engineer</h2>

            {/* <h3>Summary</h3> */}

            {/* Michael Nugent demonstrates his competency as an associate software engineer through three areas: */}
            {/* As a recent college graduate with limited industry experience,  */}
            <p id="introduction">Qualifications are divided into three categories:</p>
            <ol>
                <li>
                    <Link to={'/Education'}>
                        Education
                    </Link>
                    <ul>
                        <li>
                            BS Computer Science degree
                        </li>
                        <li>
                            Multiple high-quality academic projects
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'/Skills'}>
                        Skills
                    </Link>
                    <ul>
                        <li>
                            Programming Languages
                        </li>
                        <li>
                            Web Development
                        </li>
                        <li>
                            Software Engineering
                        </li>
                        <li>
                            Soft Skills
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'/Work_Experience'}>
                        Work Experience
                    </Link >
                    <ul>
                        <li>
                            Student Technician
                        </li>
                        <li>
                            10+ years non-industry
                        </li>
                    </ul>
                </li>
            </ol>
            <p id="summary">
                {/* Michael Nugent is an inquisitive, diligent, and hungry asset ready to deliver */}
            </p>
        </div >
    )

};

export default Abstract