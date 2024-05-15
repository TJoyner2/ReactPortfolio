import React from 'react';
import './Navbar.css';
import placeHolder from '../../assets/placeHolder.jpg'
// above import is for my logo that I am going to create soon

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <img src={placeHolder} alt="" style={{width: '10%', height: 'auto'}}/>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
            <div className="nav-connect">Contact Me</div>
        </div>
    )
}

export default Navbar