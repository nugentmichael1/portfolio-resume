import React from 'react'

//components
// import NavBar from './NavBar'
import NavBarScroll from './NavBarScroll'

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
                <h3>
                    Jr Software Engineer
                </h3>
            </div>
            {/* <img src={Headshot} alt='Headshot of Michael Nugent' /> */}
            {/* <NavBar /> */}
            <NavBarScroll />
        </div>
    )
}

export default Header