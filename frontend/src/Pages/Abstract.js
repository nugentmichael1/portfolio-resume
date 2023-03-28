import React from "react";
import { Link } from "react-router-dom"

//css
import "../CSS/Abstract.css"

function Abstract() {
    return (
        <div className='abstract'>
            <h1>Michael Nugent</h1>
            <h2>Associate Software Engineer</h2>

            {/* <h3>Summary</h3> */}

            {/* Michael Nugent demonstrates his competency as an associate software engineer through three areas: */}
            <p id="introduction">As a 35 year-old, recent college graduate, Nugent's strengths reside within his:</p>
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
                            Multiple high-quality academic projects.
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'/Skills'}>
                        Skills
                    </Link>
                    <ul>
                        <li>
                            Programming languages
                        </li>
                        <li>
                            General traits
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
                            10+ years general/non-industry
                        </li>
                    </ul>
                </li>
            </ol>
            <p id="summary">Michael Nugent is a powerful asset to</p>
        </div >
    )

};

export default Abstract