import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import customer from '../assets/images/customer.jpg'
import brand from '../assets/images/brand.jpg'
import pandemic from '../assets/images/pandemic.jpg'

const OurGoals = () => {
  return (
    <Container fluid className="our-goals-section">
        <h1>Our Goals</h1>
        <hr />
        <p>Our aim at Phoenix Marketing is to provide grown to your company, by adding
          our personal level of service.
        </p>
        <Row className="goal-row">
          <Col className="goal-box" sm={8}>
              <p className="goal-text">Customer Acquisiton through sales</p>
              <img src={customer} alt="Customer Acquisition" />
          </Col>
          <Col className="goal-box"sm={8}>
              <p className="goal-text">Help put a focus On Brand Loyalty</p>
              <img src={brand} alt="Brand Loyalty" />
          </Col>
          <Col className="goal-box"sm={8}>
            <p className="goal-text">Help reacovery from the pandemic</p>
            <img src={pandemic} alt="pandemic recovery" />
        </Col>  
        </Row>
    </Container>
  )
}

export default OurGoals