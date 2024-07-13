
import { React, useState } from 'react'

import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../Configuration/firebaseConfig'

//images
import emailIcon from "../Assets/LogoIcons/emailIcon.png"
// import phoneIcon from "../Assets/LogoIcons/phoneIcon.png"
// import gitHubMark from "../Assets/LogoIcons/github-mark.png"
import gitHubMarkWhite from "../Assets/LogoIcons/github-mark-white.png"
// import linkedInLogo from "../Assets/LogoIcons/LI-Logo.png"
import linkedInBug from "../Assets/LogoIcons/LI-In-Bug.png"
import resumeIcon from "../Assets/LogoIcons/resumeIcon.png"
// import resume from "../Assets/MichaelNugentSoftwareEngineer.pdf"

//css
import '../CSS/Contact.css'



const Contact = () => {

    const [resumeURL, setResumeURL] = useState("")

    // const storage = getStorage();
    const storageRef = ref(storage, 'MichaelNugentSoftwareEngineer.pdf');


    getDownloadURL(storageRef)
        .then((url) => {
            setResumeURL(url)
        })
        .catch(error => {
            console.error('Error getting resume download URL:\n', error)
        })

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
                        {/* <td>
                            <a href={resume} target="_blank" rel="noreferrer">
                                <img src={resumeIcon} id="resumeIcon" alt='Resume Icon - Click to view resume' title='Resume' />
                            </a>
                        </td> */}
                        <td>
                            <a href={resumeURL} target="_blank" rel="noreferrer">
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

