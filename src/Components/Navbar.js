import React from 'react';
import '../Components/Navbar.css';
import logo from '../Images/beelogo.svg';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <a><img src={logo} /></a>
            </div>
        </div>
    )
}

export default Navbar
