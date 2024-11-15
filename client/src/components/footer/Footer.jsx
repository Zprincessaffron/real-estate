import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  const [isPastBottom, setIsPastBottom] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        // Get the bottom position of the target div relative to the viewport
        const targetRect = targetRef.current.getBoundingClientRect();
        
        // Check if the bottom of the div has crossed the 100px past the bottom of the viewport
        if (targetRect.bottom <= window.innerHeight - 50) {
          setIsPastBottom(true);
        } else {
          setIsPastBottom(false);
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded with the div already past the bottom
    handleScroll();

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='footer_main'>
      <div className={`footer_div1 ${isPastBottom}`} ref={targetRef}>
        <div className='footer_div11'>
          <div className='footer_div11_1'>
            <h2>GET STARTED</h2>
            <button>LOGIN</button>
            
          </div>
          <div  className='footer_div11_2'>
            <span><FaFacebookF/></span>
            <span><FaWhatsapp/></span>
            <span><FaInstagram/></span>

          </div>

        </div>
        <div className='footer_div12_121'>
          
        <div className='footer_div12'>
          <h1>COMPANY</h1>
         <div>
         <p>About</p>
          <p>Home</p>
          <p>Contact</p>
         </div>

        </div>
        <div className='footer_div12'>
          <h1>SERVICES</h1>
          <div>
          <p>House</p>
          <p>Land</p>
          <p>Apartment</p>
          </div>
          
        </div>
        <div className='footer_div12'>
        <h1>ADDRESS</h1>
        <div>
          <p>No.7,Gurul St,<br/>
            Theni - 605004,<br/>
            Tamilnadu
          </p>
        </div>

        </div>

        </div>
      </div>
      <div className={`footer_div2 ${isPastBottom}`} >
        <div className='footer_div21'>
          <p>TERMS AND CONDITION</p>
          <p>PRIVATE POLICY</p>

        </div>
        <div className='footer_div22'>
          <p>MADE BY HEYRAM INFRASTRUCTURE</p>

        </div>

      </div>
    </div>
  )
}
 
export default Footer