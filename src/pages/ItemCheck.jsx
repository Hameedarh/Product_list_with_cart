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

        <div className='items-wrap wrap'>
          <div className='check-border items-wrap'>
            {cartItems.map((item) => {
                return (
                  <div>
                    <p>hello</p>
                    <div className='items-wrap wraps'>
                      <p>1X</p>
                      <p>{item.price}</p>
                      <p>price</p>
                    </div>
                  </div>
                );
              })}

            {
              cartItems.length > 0 ? (
                <div>
                  <img src={RemoveItem} alt='close-icon'onClick={() => {
                   removeFromCart(item)
                }}/>
                <p>Order Total: ${getCartTotal()}</p>
                </div>
              ) : (
                  <div className='Empty-cart'>
                    <img src={CartEmpty} alt='empty cart'/>
                    <p>Your added items will appear here</p>
                  </div>
                
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCheck