import React from 'react'

//utility functions
import nestedLists from '../Utility/nestedLists'

//icons
import youTubeLogo from "../Assets/LogoIcons/yt_icon_rgb.png"
import webApp from "../Assets/LogoIcons/webAppCropped.png"
// import GitHubLogo from "../Assets/LogoIcons/GitHub_Logo.png"
import GitHubMark from "../Assets/LogoIcons/github-mark.png"

//Returns array of li elements with links inside based on input
const buildProjectLinks = (presentation, app, repository) => {

    const videoPresentationLink = (presentation === "") ? null :
        <a key={"presentation"} href={presentation} target="_blank" rel='noreferrer'>
            <img src={youTubeLogo} alt="YouTube icon as link to project's video presentation." className='ytIcon' />
        </a>

    const webAppLink = (app === undefined) ? null :
        <a key={"webApp"} href={app} target="_blank" rel='noreferrer'>
            <img src={webApp} alt="Web App icon as link to project's live use." className='webAppIcon' />
        </a>

    const repositoryLink = (repository === undefined) ? null :
        <a key={"repository"} href={repository} target="_blank" rel='noreferrer'>
            <img src={GitHubMark} alt="GitHub Mark as link to project's repository." className='gitHubMark' />
        </a>


    return [videoPresentationLink, webAppLink, repositoryLink]

}

const Card = ({ title, concepts, presentation, app, repository, img }) => {

    return (
        <div className='card'>
            <img src={img} alt='' />
            <div className='card-content'>
                <h1 className='card-title'>{title}</h1>
                <div className='card-description'>
                    {/* <h4>Concepts</h4> */}
                    {nestedLists(concepts)}
                </div>
                <div className='card-links'>
                    {/* <h4>Links</h4> */}
                    {buildProjectLinks(presentation, app, repository)}
                </div>
            </div>

        </div>
    )
}

export default Card