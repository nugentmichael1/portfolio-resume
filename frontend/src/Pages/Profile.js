import React from "react";

//css
import "../CSS/Profile.css"

//assets
import pdfIcon from "../Assets/pdfIcon.png"
import resume from "../Assets/MichaelNugentResume.pdf"
import emailIcon from "../Assets/emailIcon.png"
import phoneIcon from "../Assets/phoneIcon.png"
import gitHubMark from "../Assets/github-mark.png"

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
            <table id="contact">
                <thead>
                    <tr>
                        <th>eMail</th>
                        <th>Phone</th>
                        <th>GitHub</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="mailto:NugentMichael@live.com"><img src={emailIcon} alt="email icon" id="emailIcon" /></a></td>
                        <td><a href="tel:949-293-5705"><img src={phoneIcon} alt="Call 949-293-5705" id="phoneIcon" /></a></td>
                        <td><a href="https://github.com/nugentmichael1"><img src={gitHubMark} alt="GitHub Mascot - Click to access my profile." id="gitHubMark" /></a></td>
                        <td>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53121.17808110838!2d-117.81253484776988!3d33.68115758899167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1676487091285!5m2!1sen!2sus" id="location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map Location"></iframe>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <ul id="contact">
                <li id="email"><a href="mailto:NugentMichael@live.com"><img src={emailIcon} alt="email icon" id="emailIcon" /></a></li>
                <li id="phone">(949) 293-5705</li>
                <li id="location">Irvine, CA</li>
            </ul> */}
            <h3>Resume</h3>
            <p><a href={resume} target="_blank" rel="noreferrer"><img src={pdfIcon} alt="pdf icon" className="pdfIcon" /></a></p>
        </div>
    )

};

export default Profile