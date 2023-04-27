import React, { useEffect, useState } from 'react'
import "./topimg.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'


function TopIMG() {
    const [image, setImage] = useState('')
    const [words, setWords] = useState('')
    const [smWords, setSmWords] = useState('')
    let [count, setCount] = useState(0)
    const imgArray = ['https://images.unsplash.com/photo-1567663711269-0351025d18a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGxheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

]
const wordArr = ['Learning that gets you', "Too busy to take physical classes?"]
const smWordArr = ["Become a rockstart today with Edge Music Academy.", "Try our E-learn program Today!"]
    
    useEffect(()=>{
        window.setTimeout(function(){
           
            if(count === 0){
                setCount(count + 1)
                setImage(imgArray[count])
                changeWords(count)
                console.log(count)
            }else{
                setCount(count - 1)
                setImage(imgArray[count])
                changeWords(count)
                console.log(count)
                
            }
           
        }, 6000)
        
      
    })

   
    const changeWords = (num)=>{
                setWords(wordArr[num])
                setSmWords(smWordArr[num])
    }

    const changeimg = ()=>{
        if(count === 0){
            setImage(imgArray[1])
            changeWords(1)
            
        }else{        
            setImage(imgArray[0])
            changeWords(0)
            
            
        }
    }
  return (
    <div className='image-top'>
        <img className='image' src={image || imgArray[1]} alt=''/>
        <div className='text'>
            <div className='text-container'>
                <h2 className='image-text'>{words|| wordArr[1]}</h2>
                <p className='image-para'>{smWords || smWordArr[1]}</p>
                <button className='e-learn-btn'>E-Learn!</button>
            </div>
            
        </div>
        <div className='sliderArrow'>
            <span onClick={changeimg}><ArrowBackIosOutlined fontSize='large' sx={{ fontSize: 50 }} className='left'/></span> 
            <span onClick={changeimg}><ArrowForwardIosOutlined fontSize='large' sx={{ fontSize: 50 }} className='right'/></span>
            
        </div>   
    </div>
  )
}

export default TopIMG
