import React from 'react'


//Icons
// import GitHubMarkWhite from "../Assets/github-mark-white.png"
import GitHubLogoWhite from "../Assets/GitHub_Logo_White.png"
// import youTubeIcon from "../Assets/yt_icon_rgb.png"
import youTubeLogo from "../Assets/yt_logo_rgb_dark.png"
import webApp from "../Assets/webAppDark.png"
// import GitHubLogo from "../Assets/GitHub_Logo.png"


function CarouselCaption({ title, presentation, app, repository }) {
    // console.log(presentation, app, repository)

    console.log(presentation)

    const videoPresentationLi = (presentation === "") ? null :
        <li>
            <a href={presentation} target="_blank" rel='noreferrer'>
                {/* <img src={youTubeIcon} className='ytIcon' /> */}
                <img src={youTubeLogo} alt="YouTube Logo as link to project's video presentation." className='ytIcon' />
                {/* Presentation */}
            </a>
        </li>

    const webAppLi = (app === undefined) ? null :
        <li>
            <a href={app} target="_blank" rel='noreferrer'>
                <img src={webApp} alt="Web App logo as link to project's live use." className='webAppIcon' />
                {/* Web App */}
                {/* <svg>
                    <text fill='#ffffff' fontSize={45} fontFamily='Verdana' x={50} y={86}>{webAppSvgText}</text>
                </svg> */}
            </a>
        </li >

    const repositoryLi = (repository === undefined) ? null :
        <li>
            <a href={repository} target="_blank" rel='noreferrer'>
                {/* <img src={GitHubMarkWhite} className='gitHubMark' /> */}
                <img src={GitHubLogoWhite} alt="GitHub Logo (White) as link to project's repository." className='gitHubLogo' />
                {/* Repository */}
            </a>
        </li>

    return (
        <div className='myCarouselCaption'>
            <h3>{title}</h3>
            <ul>
                {videoPresentationLi}
                {webAppLi}
                {repositoryLi}
            </ul>
        </div>
    )
}

export default CarouselCaption