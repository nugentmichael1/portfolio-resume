
import React from 'react'

//images
import emailIcon from "../Assets/emailIcon.png"
// import phoneIcon from "../Assets/phoneIcon.png"
// import gitHubMark from "../Assets/github-mark.png"
import gitHubMarkWhite from "../Assets/github-mark-white.png"
// import linkedInLogo from "../Assets/LI-Logo.png"
import linkedInBug from "../Assets/LI-In-Bug.png"
import resumeIcon from "../Assets/resumeIcon.png"
// import resume from "../Assets/MichaelNugentResume.pdf"
import resume from "../Assets/SoftwareEngineer.pdf"

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
                        {/* <th>Phone</th> */}
                        <th>GitHub</th>
                        <th>LinkedIn</th>
                        <th>Resume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="mailto:NugentMichael@live.com">
                                <img src={emailIcon} alt="email icon" id="emailIcon" title='eMail' />
                            </a>
                        </td>
                        {/* <td>
                            <a href="tel:949-293-5705">
                                <img src={phoneIcon} alt="Call 949-293-5705" id="phoneIcon" title='Telephone' />
                            </a>
                        </td> */}
                        <td>
                            <a href="https://github.com/nugentmichael1" target="_blank" rel="noreferrer">
                                <img src={gitHubMarkWhite} alt="GitHub Mascot - Click to access my profile." id="gitHubMark" title='GitHub' />
                            </a>
                        </td>
                        <td>
                            <a href='https://www.linkedin.com/in/nugentmichael1/' target='_blank' rel='noreferrer'>
                                <img src={linkedInBug} alt="LinkedIn Logo" id="linkedInLogo" title='LinkedIn' />
                            </a>
                        </td>
                        <td>
                            <a href={resume} target="_blank" rel="noreferrer">
                                <img src={resumeIcon} id="resumeIcon" alt='Resume Icon - Click to view resume' title='Resume' />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Contact

