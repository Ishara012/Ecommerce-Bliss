 
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
   
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
         
        const quantity = cartItems[e.id] || 0;
        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>Rs. {e.new_price}</p>
                <button className='cartitems-quantity'>{quantity}</button>
                <p>Rs.{e.new_price * quantity}</p>
                <img className='cartitems-remove-icon' src={remove_icon}
                  onClick={() => { removeFromCart(e.id); }}
                  alt="remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>Rs.{getTotalCartAmount}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shippong Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>Rs.{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button onClick={()=>navigate('/orders')}>PROCEED TO CHECKOUT</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartItems;


