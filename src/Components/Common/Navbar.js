import React from 'react';
import brand from '../../img/ui/nicolino-restobar.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
                    <button className='miniNavbarButton'><i className='fa-solid fa-angle-down'></i></button>
                </div>
            </div>
            <div className='miniNavbar'>
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