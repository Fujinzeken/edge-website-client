import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import "./elearn.css"

function Elearn() {
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate('/e-learn/class/:id')
  }
  return (
    <div className='elearn'>
      <div className='image-top'>
          <img className='image' src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt=''/>
          <div className='text'>
              <div className='text-container'>
                  <h2 className='image-text'>Learning that knows no limits.</h2>
                  <p className='image-para'>Join our budding online learners today!</p>
                  <button className='e-learn-btn'>Log in</button>
              </div> 
          </div>
      </div>
      <div className='onlineClassesAvailable'>
        <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>
         <div className='class-card'>           
            <img className='productImg' src='https://images.unsplash.com/photo-1470784591255-6c7c80d419c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMG1hbiUyMHBsYXlpbmclMjBwaWFub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
         alt=''/>           
            <div >
              <h2>Class Title</h2>
              <p className='smwords'>Words  is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
              <button className='learnMore' onClick={handleclick}>Learn More</button>
            </div>
         </div>

       
      </div>
      <Footer />
    </div>
  )
}

export default Elearn
