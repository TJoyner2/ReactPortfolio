import React from 'react'
import './Navbar.css'
//would love to import a logo once I have one

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Contact Me</div>
        </div>
    )
}

export default Navbar