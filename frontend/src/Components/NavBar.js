import React from 'react'
import { Link, useParams } from 'react-router-dom';
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

    return <Link to={'/' + page} className={classes}><li>{title}</li></Link>
}


function NavBar() {

    const { page } = useParams() || "home";

    return (<>
        <nav>
            <ul className='nav'>
                <NavLink page='Profile' selected={page === 'Profile'} />
                <NavLink page='Skills' selected={page === 'Skills' || page === undefined} />
                <NavLink page='Work_History' selected={page === 'Work_History'} />
                <NavLink page='Projects' selected={page === 'Projects'} />
                <NavLink page='Education' selected={page === 'Education'} />
            </ul>
        </nav>
    </>

    )
}

export default NavBar