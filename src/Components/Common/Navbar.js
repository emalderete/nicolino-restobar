import React, { useState, useEffect } from 'react';
import brand from '../../img/ui/nicolino-restobar.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [miniNavbarActive, setMiniNavbarActive] = useState(false);

    function navbarHandler(){
        miniNavbarActive ? setMiniNavbarActive(false) : setMiniNavbarActive(true);
    }

    return (
        <div>
            <div className='navbarContainer'>
                <div className='navbar'>
                    <div className='brandContainer'>
                        <NavLink to='/'><img className='brand' src={brand} alt=''></img></NavLink>
                    </div>
                    <ul className='navbarItems'>
                        <li className='navbarItem'><NavLink className='navLink' to='menu'><i className='fa-solid fa-utensils'></i> Menu</NavLink></li>
                        <li className='navbarItem'><NavLink className='navLink' to='events'><i className='fa-solid fa-calendar-check'></i> Events</NavLink></li>
                        <li className='navbarItem'><NavLink className='navLink' to='about'><i className='fa-solid fa-users'></i> About Us</NavLink></li>
                    </ul>
                    <button style={miniNavbarActive ? {transform: 'rotateY(180deg)'} : null} className='miniNavbarButton' onClick={navbarHandler}><i className='fa-solid fa-angle-down'></i></button>
                </div>
            </div>
            <div style={miniNavbarActive ? {transform : 'translateY(5rem)'} : {transform : 'translateY(-10rem)'}} className='miniNavbar'>
                <ul className='miniNavbarItems'>
                    <li className='miniNavbarItem'><NavLink className='navLink miniNavLink' to='menu'><i className='fa-solid fa-utensils'></i> Menu</NavLink></li>
                    <li className='miniNavbarItem'><NavLink className='navLink miniNavLink' to='events'><i className='fa-solid fa-calendar-check'></i> Events</NavLink></li>
                    <li className='miniNavbarItem'><NavLink className='navLink miniNavLink' to='about'><i className='fa-solid fa-users'></i> About Us</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;