import React from 'react'

import "../CSS/LoadingScreen.css"

function LoadingScreen() {
    return (
        <div id='loading-screen'>
            <h1>Michael Nugent</h1>
            <h2>Software Engineer</h2>
            {/* <h3>Portfolio</h3> */}
            <div className='spinner'></div>
            <p>Loading...</p>
            {/* <p>Please wait a few moments while Google Firebase initializes a backend instance.</p> */}
        </div>
    )
}

export default LoadingScreen