import React from 'react'
import './styles/ItemCheckout.css'
import CartEmpty from '../assets/images/illustration-empty-cart.svg'

function ItemCheck() {
  return (
    <div className='Checkout-wrap'>
      <div className='Check-wrap'>
        <div className='CheckoutH'>
          <h1>Your Cart (0)</h1>
        </div>
        <div className='Empty-cart'>
          <img src={CartEmpty} alt='empty cart'/>
          <p>Your added items will appear here</p>
        </div>

      </div>
    </div>
  )
}

export default ItemCheck