import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo"/>
        </header>
    );
};

export default Header;