import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Elevate</h1>
            <h1>Your Wardrobe</h1>
            <p>Limited Time Offer!</p>
            <button>Check Now</button>
        </div>

        <div className="offers-right">
            <img src={exlusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
