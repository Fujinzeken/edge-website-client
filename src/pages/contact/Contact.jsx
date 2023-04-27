import React from 'react'
import "./contact.css"


function Contact() {
  return (
    <div className='contact'>
        <div className='formContainer'> 
            <div>
                <h1>Contact us</h1>
            </div> 
            <form className='form'>
                <input className='formInput' type='text' placeholder='Name...'></input>
                <input className='formInput' type='text' placeholder='Email...'></input>
                <textarea className='formTextArea' type='text' placeholder='Tell us about your Enquiry...'></textarea>
                <button className='formbtn'>Submit</button>
            </form>
        </div> 
    </div>
  )
}

export default Contact
