import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <Container fluid className="services-section" id="services">
        <h2>Services</h2>
        <hr />
        <Row className="services-text-row">
            <Col>
                <h3>Service 1</h3>
                <p>From our years of experience in the industry, we are efficient when it comes
                     to targeting your chosen demographic. In today's changing market consumers 
                     are offered an extended amount of options, through expert rapport building 
                     we ensure our clients remain the only sensible choice.
                </p>
            </Col>
            <Col><h3>Service 2</h3>
                <p>From our years of experience in the industry, we are efficient when it comes
                     to targeting your chosen demographic. In today's changing market consumers 
                     are offered an extended amount of options, through expert rapport building 
                     we ensure our clients remain the only sensible choice.
                </p>
            </Col>
            <Col><h3>Service 3</h3>
                <p>From our years of experience in the industry, we are efficient when it comes
                     to targeting your chosen demographic. In today's changing market consumers 
                     are offered an extended amount of options, through expert rapport building 
                     we ensure our clients remain the only sensible choice.
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default Services