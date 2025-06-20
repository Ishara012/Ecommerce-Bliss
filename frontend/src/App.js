
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Fotter from './Components/Footer/Fotter';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Orders from './Pages/Orders';
import About from './Pages/About';
import { Search } from './Components/Search/Search';
// import Contact from './Pages/Contact';
 
 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search/>}/>
          {/* <Route path='/contact' element={<Contact/>}/> */}
           
        </Routes>
        <Fotter></Fotter>
      </BrowserRouter>
    </div>
  );
}

export default App;

