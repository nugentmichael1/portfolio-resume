import React from "react";
import resume from "../Assets/MichaelNugentResume.pdf"
import "../CSS/Profile.css"

function Profile() {
    return (
        <div className='profile'>
            <h1>Michael Nugent</h1>
            <h2>Entry-Level Software Engineer</h2>
            <h3>Summary</h3>
            <p id="summary">Recent BS Computer Science graduate with electives in databases, web development, software engineering, and
                artificial intelligence. Possesses a decade of non-industry work experience. Demonstrates competency with multiple high-quality academic
                projects.</p>
            <h3>Contact</h3>
            <ul id="contact">
                <li id="email"><a href="mailto:NugentMichael@live.com">NugentMichael@live.com</a></li>
                <li id="phone">(949) 293-5705</li>
                <li id="location">Irvine, CA</li>
            </ul>
            <h3>Resume</h3>
            <p><a href={resume} target="_blank" rel="noreferrer">Open/Download</a></p>
        </div>
    )

};

export default Profile