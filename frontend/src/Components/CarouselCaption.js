import React from 'react'


//Icons
// import GitHubMarkWhite from "../Assets/github-mark-white.png"
import GitHubLogoWhite from "../Assets/GitHub_Logo_White.png"
// import youTubeIcon from "../Assets/yt_icon_rgb.png"
import youTubeLogo from "../Assets/yt_logo_rgb_dark.png"
import webApp from "../Assets/webAppDark.png"
// import GitHubLogo from "../Assets/GitHub_Logo.png"

//Returns array of li elements with links inside based on input
const buildCarouselCaptionLinks = (presentation, app, repository) => {

    const videoPresentationLi = (presentation === "") ? null :
        <li>
            <a href={presentation} target="_blank" rel='noreferrer'>
                <img src={youTubeLogo} alt="YouTube Logo as link to project's video presentation." className='ytIcon' />
            </a>
        </li>

    const webAppLi = (app === undefined) ? null :
        <li>
            <a href={app} target="_blank" rel='noreferrer'>
                <img src={webApp} alt="Web App logo as link to project's live use." className='webAppIcon' />
            </a>
        </li >

    const repositoryLi = (repository === undefined) ? null :
        <li>
            <a href={repository} target="_blank" rel='noreferrer'>
                <img src={GitHubLogoWhite} alt="GitHub Logo (White) as link to project's repository." className='gitHubLogo' />
            </a>
        </li>


    return [videoPresentationLi, webAppLi, repositoryLi]

}

//Helps break down nested lists
const nestedLists = (composite) => {

    if (Array.isArray(composite)) {
        const conceptsList = []

        let conceptsKey = 0

        composite.forEach(concept => {

            conceptsList.push(<li key={conceptsKey++}>{nestedLists(concept)}</li>)
        })

        return <ul>{conceptsList}</ul>
    }

    else if (typeof (composite) === "object") {
        const label = Object.keys(composite)[0]

        return [label, ":", nestedLists(composite[label])]
    }

    return composite
}


function CarouselCaption({ title, concepts, presentation, app, repository }) {

    return (
        <div className='myCarouselCaption'>
            <h3>{title}</h3>
            <h4>{nestedLists(concepts)}</h4>
            <ul>
                {buildCarouselCaptionLinks(presentation, app, repository)}
            </ul>
        </div>
    )
}

export default CarouselCaption