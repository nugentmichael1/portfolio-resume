import React from 'react'


import GitHubMarkWhite from "../Assets/github-mark-white.png"
// import GitHubLogo from "../Assets/GitHub_Logo.png"


function CarouselCaption({ title, presentation, app, repository }) {
    console.log(presentation, app, repository)
    return (
        <div className='myCarouselCaption'>
            <h3>{title}</h3>
            <ul>
                <li>
                    <a href={presentation}>
                        Video Presentation
                    </a>
                </li>
                <li>
                    <a href={app}>
                        Web App
                    </a>
                </li>
                <li>
                    <a href={repository}>
                        <img src={GitHubMarkWhite} className='gitHubMark' />
                        Repository
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CarouselCaption