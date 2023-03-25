import React from "react";
import { Link } from "react-router-dom"

//css
import "../CSS/Profile.css"

function Profile() {
    return (
        <div className='profile'>
            {/* <h1>Michael Nugent</h1>
            <h2>Entry-Level Software Engineer</h2> */}

            {/* <h3>Summary</h3> */}

            <p id="summary">
                Michael Nugent demonstrates his competency as an entry-level software engineer through three areas:
                <ol>
                    <li><Link to={'/Education'}>Education</Link>
                        <ul>
                            <li>BS Computer Science degree
                            </li>
                            <li>Multiple high-quality academic projects.</li>
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
                Michael Nugent is a powerful asset to 
            </p>
        </div>
    )

};

export default Profile