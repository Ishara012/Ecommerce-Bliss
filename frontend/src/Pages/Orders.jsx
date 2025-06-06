import React, { useContext } from 'react'
import './CSS/Orders.css'
import { ShopContext } from '../Context/ShopContext'

const Orders = () => {

    const {getTotalCartAmount} = useContext(ShopContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>


         <input type="text" placeholder='Full Name'/>   

        <input type="email" placeholder='Email'/>

        <input type="text" placeholder='Address' />

   

        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
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
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Orders
