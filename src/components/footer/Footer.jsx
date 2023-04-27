import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"


function Footer() {
    const date = new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-content-contianer'>
          <div className='footer-top'>
          <span className='footer-content'><Link to='/about' className='link'>About us</Link></span>
             <span className='footer-content'> <Link to='/contact' className='link'>Contact us</Link></span>
          </div>
          <div className='footer-top'>
             <span className='footer-content'> <Link to='/e-learn' className='link'>E-learn</Link></span>
              <span className='footer-content'>Private lessons</span>
          </div>
          <div className='footer-top'>
              <span className='footer-content'>Help and Support</span>
              <span className='footer-content'>Music Marketing</span>
          </div>
        </div>
        <div className='social-container'>
          {/* <img className='social-icon' src={email} alt='fb'/>
          <img className='social-icon' src={ig} alt='ig'/>
          <img className='social-icon' src={fb} alt='email'/> */}
        </div>
      </div>
      <div className='footer-bottom'>
        <span className='logo'>EDGE MUSIC ACADEMY</span>
        <span className='copy'>&copy;{date} Edge Music Academy</span>
      </div>
    </div>
  )
}

export default Footer
