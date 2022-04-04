import React, { useEffect, useState } from 'react';

const MobileNavbar = () => {

    useEffect(() =>{
        const menuBtn = document.querySelector('.menu-btn');
        const mobileDropdown = document.querySelector('.mobilenav-dropdown');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if(!menuOpen){
                menuBtn.classList.add('open');
                menuOpen = true
                mobileDropdown.style.marginTop = "0"
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false
                mobileDropdown.style.marginTop = "-40vh"
            }
        })
    })
   

  return (
    <nav className="mobilenav">
            <div className="menu-btn">
                <div className="menu-btn-burger">

                </div>
            </div>
            <ul className="mobilenav-dropdown">
                <hr />
                <li><a href="#home"><p>Home</p></a></li>
                <hr />
                <li><a href="#about-us"><p>About Us</p></a></li>
                <hr />
                <li><a href="#services"><p>Services</p></a></li>
                <hr />
                <li><a href="#contact"><p>Contact</p></a></li>
                <hr />
            </ul>
        </nav>
  )
};

export default MobileNavbar;