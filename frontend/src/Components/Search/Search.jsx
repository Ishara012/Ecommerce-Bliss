import React, { useContext, useState } from 'react'
import './Search.css'
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

export const Search = () => {
    const [search,setSearch]=useState('');
    const { all_product } = useContext(ShopContext);

  return (
    <div className='searchContainer'>
        <input className='searchInput' placeholder='Search here....' type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <div className="shopcategory-products">
        {all_product.filter(valu=>valu.name.toLowerCase().includes(search.toLowerCase())).map((item, i) => {
          
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
        })}
      </div>
    </div>
  )
}
