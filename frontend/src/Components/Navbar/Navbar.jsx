import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import search_icon from '../Assets/search.png'
//import order_icon from '../Assets/order_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
 

const Navbar = () => {

    const[menu,setMenu] = useState('shop');
    const{getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Blizz VIBES</p>
      </div>

      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

      <ul ref={menuRef} className="nav-menu">
        <li className={menu==="shop"?'active':'menuitem'} onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link></li>
        <li className={menu==="mens"?'active':'menuitem'} onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link></li>
        <li className={menu==="womens"?'active':'menuitem'} onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link></li>
        <li className={menu==="kids"?'active':'menuitem'} onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
      </ul>

      
      
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to='/search'><img src={search_icon} alt="" height={'30px'}/></Link>

        {/* <Link to='/orders'><img src={order_icon} alt="" /></Link> */}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
 
    </div>
  )
}

export default Navbar

 