import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <Container fluid className="services-section" id="services">
        <h2>Services</h2>
        <hr />
        <Row className="services-text-row">
            <Col md sm={8}>
                <h3>Lead Generation</h3>
                <p>Our brand ambassadors are well versed in delivering and understanding our clients 
                    goals when it comes to generating paying customers and providing positive brand awareness.
                </p>
            </Col >
            <Col md sm={8}><h3>Customer Acquisiton</h3>
                <p>Our brand ambassadors specialise in connecting with customers on a human level, which in turn
                     generates paying customers whilst conveying our clients values. 
                </p>
            </Col>
            <Col md sm={8}><h3>Operations</h3>
                <p>We specialise in direct marketing, our ethos is adding the human element to our sales
                 strategy and exceeding our clients expectations
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default Services