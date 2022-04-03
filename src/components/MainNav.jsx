import React from 'react'


const MainNav = () => {
  return (
    <div className="mainnav-container">
        <div className="logo">
            PS
        </div>
        <div className="navigation">
            <ul className="navbar">
                <li className="nav-links">
                    <a href="#home">Home</a>
                </li>
                <li className="nav-links">
                    <a href="#home">About Us</a>
                </li>
                <li className="nav-links">
                    <a href="#home">Services</a>
                </li>
                <li className="nav-links">
                    <a href="#home">Contact Us</a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default MainNav