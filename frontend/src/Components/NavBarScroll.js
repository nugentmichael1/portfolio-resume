import { React } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Nav.css'

const NavLink = ({ page, selected, extraClass }) => {

    //capitalize page title
    var title = [...page.charAt(0).toUpperCase() + page.slice(1)];

    //change any web address underscores to title spaces
    for (let i = 0; i < title.length; i++) {
        if (title[i] === '_') {
            title[i] = ' ';
        }
    }

    //identify active link with a special class
    let classes = selected ? 'NavLink-Active' : 'NavLink';
    if (extraClass) classes += ' ' + extraClass;

    return <Link to={'#' + page} className={classes}><li>{title}</li></Link>
}


function NavBarScroll() {

    const { hash } = useLocation();

    return (<>
        <nav>
            <ul id='navUL'>
                <NavLink page='Projects' selected={hash === '#Projects' || !hash} />
                <NavLink page='Education' selected={hash === '#Education'} />
                <NavLink page='Skills' selected={hash === '#Skills'} />
                <NavLink page='Work_Experience' selected={hash === '#Work_Experience'} />
            </ul>
        </nav>
    </>

    )
}

export default NavBarScroll