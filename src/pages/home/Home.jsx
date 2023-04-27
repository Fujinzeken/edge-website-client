import React from 'react'
import Footer from '../../components/footer/Footer'
import Programs from '../../components/programs/Programs'
import Testimonials from '../../components/Testimonials/Testimonials'
import TopIMG from '../../components/topimage/TopIMG'
import "./home.css"
function Home() {
  return (
    <div>
     <TopIMG />
     <Programs />
     <Testimonials />
     <Footer />
    </div>
  )
}

export default Home
