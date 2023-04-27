import React from 'react'
import "./testimonials.css"
function Testimonials() {
  return (
    <div className='testimonials'>
        <div className='testimonial-container'>
            <img className='testimonial-img' src='https://images.unsplash.com/photo-1622673705547-2609427981ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHlvdW5nJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
            <p className='testimonial-name'>Shola</p>
            <p className='testimonial-speech'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
            <p className='testimonial-speech job'><i>Student</i></p>
        </div>
        <div className='testimonial-cta'>
        <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>
          <div>
            <h2>Realize your dreams</h2>
            <p className='testimonial-speech'>Hundreds of students have trusted Edge Music Academy with their Musical Education,
            Join our student body today!.</p>
            <button className='learnMore'>Become a student</button>
          </div>
        </div>
    </div>
  )
}

export default Testimonials
