import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from "emailjs-com"

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm(
            "service_2ujd4bh",
            "marketing_template",
            e.target,
            "user_UGCWhOQIqwoG7fMNE3sNm"
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
    }

  return (
    <Container fluid className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <hr />
        <Row className="contact-row">
            <Col className="contact-left">
                <form onSubmit={sendEmail}>
                        <div className="contact-details">
                            <div className="contact-input-row">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control" id="fullname" required/>
                            </div>
                            <div className="contact-input-row">
                                <label htmlFor="email">Email </label>
                                <input type="text" name="email" className="form-control" id="email" required/>
                            </div>
                            <div className="contact-message">
                                <div className="contact-input-row">
                                    <label htmlFor="message">Message</label>
                                    <textarea rows="5" name="message" className="form-control" id="message" required></textarea>
                                </div>
                            </div>
                        </div>
                    <button type="submit" className="button">Send</button>
                </form>
            </Col>
            <Col className="contact-right">
                <p>Phoenix Marketing</p>
                <p>Email:</p>
                <p>Phoenixmarketing1@hotmail.com</p>

            </Col>
        </Row>
    </Container>
  )
}

export default Contact