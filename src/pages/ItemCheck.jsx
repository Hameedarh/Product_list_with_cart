import React, { useContext}from 'react'
import './styles/ItemCheckout.css'
import CartEmpty from '../assets/images/illustration-empty-cart.svg'
import RemoveItem from '../assets/images/icon-remove-item.svg'
import { CartContext } from '../context/Cart'

function ItemCheck() {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  return (
    <div className='Checkout-wrap'>
      <div className='Check-wrap'>
        <div className='CheckoutH'>
          <h1>Your Cart (0)</h1>
        </div>


{/* The beginning */}
        <div>
          {/* The active cart */}
          <div className='items-wrap wrap'>
            <div>
              <p>hello</p>
              <div className='items-wrap wraps'>
                <p>1X</p>
                <p>@price</p>
                <p>price</p>
              </div>
            </div>
            <div>
              <img src={RemoveItem} alt='close-icon'/>
            </div>
          </div>
          {/* The empty cart */}
          <div className='Empty-cart'>
            <img src={CartEmpty} alt='empty cart'/>
            <p>Your added items will appear here</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ItemCheck