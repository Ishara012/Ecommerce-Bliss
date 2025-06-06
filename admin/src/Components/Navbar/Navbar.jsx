import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
 

const Navbar = () => {
  return (
   
  <div className='admin-navbar'>
    <div className='admin-nav-logo'>
      <img src={logo} alt="" />
      <p className='main'>Blizz VIBES</p>
      <br />
      <p className='sub'>Admin pannel</p>
    </div>
  </div>    
   
  )
}

export default Navbar
