import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform where users can browse, search, and purchase products or services. It allows customers to shop from a wide range of items, add them to a cart, and complete transactions through secure payment options. </p>
        <p>The website often includes features like product categories and user reviews to enhance the shopping experience.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
