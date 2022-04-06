import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import logo from "../assets/images/phoenix.png"
import * as FaIcons from "react-icons/fa"

const Footer = () => {
  return (
    <Container fluid className="footer" id="footer">
        <Row>
            <Col className="logo-header"><img src={logo} alt="" className="logo" /><h2>Phoenix Marketing</h2></Col>
            <Col>
                <div className="instagram">
                  <a href="#"><FaIcons.FaInstagram /></a>
                </div>
            </Col>
            <Col>
                <p>&copy; 2022. Phoenix Marketing</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer