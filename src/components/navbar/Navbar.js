import React from 'react'
import './Navbar.css'

function Navbar() {

    const navItems = ["Services", "Career", "About", "Contact"];

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src="https://www.xivtech.io./logo.svg" alt=""></img>
                <img src="https://www.xivtech.io./Text.svg" alt=""></img>
            </div>
            <div className="nav-menu">
                {
                    navItems.map(item => (<div className="nav-menu-item">{item}</div>))
                }
                <div className="nav-menu-item nav-btn">Let's Talk</div>
            </div>
        </div>
    )
}

export default Navbar