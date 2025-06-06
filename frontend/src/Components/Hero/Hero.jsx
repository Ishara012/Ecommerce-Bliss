import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
//import hand_icon from'../Assets/hand_icon.png'
import arrow_icon from'../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
 

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>shop your</p>
                     
                </div>
                
                <p>favourites</p>
            </div>


             <a href='#popular'><div className="hero-latest-btn" >
                <div>Popular Collection</div>
                <img src={arrow_icon} alt="" />
            </div></a>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>

        
      
    </div>
  )
}

export default Hero
