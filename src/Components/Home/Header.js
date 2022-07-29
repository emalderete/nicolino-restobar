import React from 'react';
import Navbar from '../Common/Navbar';

const Header = () => {
    return (
        <div>
            <div className='headerContainer'>
                <div className='header'>
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;