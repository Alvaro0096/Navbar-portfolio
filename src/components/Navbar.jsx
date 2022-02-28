import React from 'react';
import './nav_style.css';

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}
 
export default Navbar;