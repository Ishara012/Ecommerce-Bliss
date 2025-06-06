import React, { useRef, useState } from 'react'
import './Fotter.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'


const Fotter = () => {

  const[menu,setMenu] = useState('shop');
  
  const menuRef = useRef();


  return (
    
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Blizz VIBES</p>
      </div>
     
      <ul ref={menuRef} className="fotter-menu">
        <li className={menu==="shop"?'active':'menuitem'} onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link></li>
        <li className={menu==="mens"?'active':'menuitem'} onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link></li>
        <li className={menu==="womens"?'active':'menuitem'} onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link></li>
        <li className={menu==="kids"?'active':'menuitem'} onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
        <li><Link to="/about">About</Link></li> 
      </ul>


      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" onClick={() => window.open('https://www.instagram.com','_blank')} />
        </div>

        <div className="footer-icons-container">
            <img src={pinterest_icon} alt="pinterest" onClick={() => window.open('https:www.pinterest.com','_blank')} />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="whatsapp" onClick={() => window.open('https:www.whatsapp.com','_blank')} />
        </div>

      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyrigt @ 2024 - All right reserved</p>
      </div>
    </div>
  )
}

export default Fotter
