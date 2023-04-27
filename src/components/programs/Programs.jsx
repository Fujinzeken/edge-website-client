import React from 'react'
import "./programs.css"
function Programs() {
  return (
    <div className='programs'>
        <div className='imgContainer'>
         <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>
         <div>
         <h2>Realize your dreams</h2>
         <p className='words'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
         <button className='learnMore'>Learn More</button>
         </div>
        </div>
        <div className='imgContainer second'>
         <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>
         <div>
         <h2>Realize your dreams</h2>
         <p className='words'>Words  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
         <button className='learnMore'>Learn More</button>
         </div>
        </div>
    </div>
  )
}

export default Programs
