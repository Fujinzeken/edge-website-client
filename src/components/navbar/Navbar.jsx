import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  const user = false
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-left'>
                <Link to='/' style={{textDecoration: "none"}}><span className='logo'>EDGE MUSIC ACADEMY</span></Link>
            </div>
            <div className='navbar-right'>
            <Link to='/' className='link'><span className='navbar-nav'>Home</span></Link>
            <Link to='/about' className='link'><span className='navbar-nav'>About</span></Link>
            <Link to='/courses'  className='link'><span className='navbar-nav'>Courses</span></Link>
            <Link to='/e-learn'  className='link'><span className='navbar-nav'>E-learn</span></Link>
            {user?
              <Link to='/'  className='link'><span className='navbar-nav'>Logout</span></Link>
            
            :<><Link to='/login'  className='link'><span className='navbar-nav'>Login</span></Link>
            <Link to='/register'  className='link'><span className='navbar-nav'>Register</span></Link></>
            }
            
            </div>
      </div>
    </div>
  )
}

export default Navbar
