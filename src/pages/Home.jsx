import React from 'react'
import * as FaIcons from "react-icons/fa"

import phoenixLogo from '../assets/images/phoenix.png'
import background from '../assets/images/bg.jpg'
const Home = () => {
  return (
    <div className="home">
      <img className="background-image" src={background} alt="" />
        <div className="hero-container">
                <div className="logo">
                    <img src={phoenixLogo} alt="" />
                </div>
            <div className="hero-header">
                <h1>Phoenix Marketing</h1>
                <h2>Marketing Solutions</h2>
              <div className="links">
                <div className="instagram">
                  <a href="#"><FaIcons.FaInstagram /></a>
                </div> 
                <div className="contact-button">
                      <a href="#contact-section" className="basic-button">Get In Touch</a>
                </div>
            </div>
            </div>
            

        </div>
    </div>
  )
}

export default Home