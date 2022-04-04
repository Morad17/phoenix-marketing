import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
        <h2>About Us</h2>
        <hr/>
        <Row className="about-text-row">
            <p>
                For us here at Steel, being driven by results and tangible success 
                for our clients means that our clients can trust us with their whole 
                sales and marketing strategy.
            </p>
            <p>
            Our brand ambassadors are experts in connecting with customers prioritising 
            a rare and valued human element, they can effectively generate instant paying 
            customers whilst conveying our client’s messages and values in a relatable manner
            in today’s busy consumer landscape.
            </p>
            <p>
            Our ongoing mission is to continue to live and breathe progress and this starts with 
            the training of our brand ambassadors, ensuring they are continually learning as fast 
            as our surrounding's evolve.
            </p>
        </Row>
    </Container>
  )
}

export default About