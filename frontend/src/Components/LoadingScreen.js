import React from 'react'

function LoadingScreen() {
    return (
        <div id='loading-screen'>
            <h1>Michael Nugent</h1>
            <h2>Jr. Software Engineer</h2>
            <h3>Portfolio</h3>
            <div className='spinner'></div>
            <p>Loading...</p>
        </div>
    )
}

export default LoadingScreen