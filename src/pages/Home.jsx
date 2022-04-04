import React from 'react'

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
            </div>
            
        </div>
    </div>
  )
}

export default Home