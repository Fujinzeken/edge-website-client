import React from 'react'
import "./register.css"

function Register() {
  return (
    <div className='register'>
        <div className='registerContainer'> 
            <div>
                <h1>Register</h1>
            </div> 
            <form className='registerform'>
                <input className='registerInput' type='email' placeholder='Email...'></input>
                <input className='registerInput' type='password' placeholder='Password...'></input>
                <button className='registerbtn'>Join our Student Body</button>
            </form>
        </div> 
    </div>
    
  )
}

export default Register
