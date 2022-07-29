import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../Responsive.css';

const Navbar = () => {
    return (
        <div>
            <div className='navbarContainer'>
                <div className='navbar'>
                    <div className='brandContainer'>
                        <span className='Brand'>Nicolino Restobar</span>
                    </div>
                    <ul className='navbarItems'>
                        <li className='navbarItem'><NavLink to='menu'>Menu</NavLink></li>
                        <li className='navbarItem'><NavLink to='events'>Events</NavLink></li>
                        <li className='navbarItem'><NavLink to='about'>About Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;