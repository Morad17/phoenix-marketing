import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
        <h2>About Us</h2>
        <hr/>
        <Row className="about-text-row">
            <p>
            We are a leading direct sales and marketing company specialising
             in promoting our clients services to potential customers and driving sales. 
            </p>
            <p>
            We are trusted by our clients to generate their whole sales and marketing strategy through face to face marketing and adding a personal element to attain
 instant paying customers whilst portraying our clients values.
            </p>
        </Row>
    </Container>
  )
}

export default About