import React from 'react';
import logo from '../../images/icons/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="navbarContainer">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="home">Home</a>
                            <a href="login">Login</a>
                            <a href="book">Book</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contents">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;