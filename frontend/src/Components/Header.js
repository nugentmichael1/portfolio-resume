import React from 'react'

//components
// import NavBar from './NavBar'

//css
import "../CSS/Header.css"

//image
// import Headshot from "../Assets/Headshot.jpg"

function Header() {
    return (
        <div className='header'>
            <div id='headerHeadings'>
                <h1>
                    Michael Nugent
                </h1>
                <h2>
                    Associate Software Engineer
                </h2>
            </div>
            {/* <img src={Headshot} alt='Headshot of Michael Nugent' /> */}
            {/* <NavBar /> */}
        </div>
    )
}

export default Header