import React, { useState, useEffect, useRef } from 'react';
import '../../styles/NavBar.css'
import navlogo from '../../images/nav_logo.png'

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolledBeyond100, setScrolledBeyond100] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    // Show/hide navbar based on scroll direction
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;

    // Check if the page is scrolled beyond 100px
    if (window.scrollY > 100) {
      setScrolledBeyond100(true);
    } else {
      setScrolledBeyond100(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 

  return (
    <div className={`nav_main ${showNavbar}`}>
        <div className='nav_div1'>

        </div>
        <div className='nav_div2'>
          <img src={navlogo} alt="" />

        </div>
        <div className='nav_div3'>
          <button>SAVED</button>
          <button>LOGIN</button>
          <button id='nav_connect'>CONNECT US</button>
          <button>MENU</button>

        </div>
        
    </div>
  )
}

export default NavBar