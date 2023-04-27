import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login'>
        <div className='loginContainer'> 
            <div>
                <h1>Login</h1>
            </div> 
            <form className='loginform'>
                <input className='loginInput' type='email' placeholder='Email...'></input>
                <input className='loginInput' type='password' placeholder='Password...'></input>
                <button className='loginbtn'>Login</button>
            </form>
        </div> 
    </div>
  )
}

export default Login
