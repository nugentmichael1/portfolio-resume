
import React from 'react'

//images
import emailIcon from "../Assets/emailIcon.png"
import phoneIcon from "../Assets/phoneIcon.png"
import gitHubMark from "../Assets/github-mark.png"
import resumeIcon from "../Assets/resumeIcon.png"
import resume from "../Assets/MichaelNugentResume.pdf"

//css
import '../CSS/Contact.css'

const Contact = () => {
    return (
        <div>
            <table id="contact">
                <caption><h3>Contact</h3></caption>
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
                            <a href={resume} target="_blank" rel="noreferrer">
                                <img src={resumeIcon} id="resumeIcon" alt='Resume Icon - Click to view resume' />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact

