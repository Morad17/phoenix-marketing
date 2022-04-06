import React from 'react'
import MobileNav from './MobileNav'

import { Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import PhoenixLogo from '../assets/images/phoenix.png'

const MainNav = () => {
  return (
    <Navbar className="mainnav-container">
           <NavbarBrand className="logo" href="home">
                <img src={PhoenixLogo} alt="" />
            </NavbarBrand>
                <Nav className="mainnav-navigation">
                    <ul className="navbar">
                        <Nav.Link href="#home" className="nav-links">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" className="nav-links">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#services" className="nav-links">
                            Services
                        </Nav.Link>
                        <Nav.Link href="#our-goals" className="nav-links">
                            Our Goals
                        </Nav.Link>
                        <Nav.Link href="#contact" className="nav-links">
                            Contact Us
                        </Nav.Link>
                    </ul>
                    
                </Nav>
                {/* <MobileNav className="mobilenav-div"/>  */}
            
    </Navbar>
  )
}

export default MainNav