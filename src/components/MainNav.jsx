import React from 'react'

import { Navbar, Container, NavbarBrand, Nav } from 'react-bootstrap'
import PhoenixLogo from '../assets/images/phoenix.png'

const MainNav = () => {
  return (
    <Navbar expand={false} className="mainnav-container">
        <Container>
           <NavbarBrand className="logo">
                <img src={PhoenixLogo} alt="" />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic" />
            <Navbar.Collapse id="basic">
                <Nav className="navigation">
                    <ul className="navbar">
                        <Nav.Link href="#home" className="nav-links">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#home" className="nav-links">
                            About Us
                        </Nav.Link>
                        <Nav.Link href="#home" className="nav-links">
                            Services
                        </Nav.Link>
                        <Nav.Link href="#home" className="nav-links">
                            Contact Us
                        </Nav.Link>
                    </ul>
                </Nav> 
            </Navbar.Collapse>
            
            
        </Container>
        
        
    </Navbar>
  )
}

export default MainNav