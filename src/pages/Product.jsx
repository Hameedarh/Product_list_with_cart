import React, {useContext, useEffect, useState} from 'react'
import './styles/Product.css'
import list from '../../data.json'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import { CartContext } from '../context/Cart'

function Product() {

 
  const [count, setCount] = useState(0)
  const { cartItems, addToCart } = useContext(CartContext)
  
  return (
    <section className='Product-wrap'>
      <div className='ProductH'>
        <h1>Desserts</h1>
      </div>
      <div>
        <div className= 'cardbody'>
          {list.map(({name, category, price, image: {thumbnail, mobile, tablet, desktop}, index}) => {
            return (
              <div className='cardwrap' key={index}>
                <img
                  src={desktop}
                  alt="product"
                  className='img-size'/>
                <div className='text-div'>
                  <p>{category}</p>
                  <p className='price-col'>{name}</p>
                  <p className='price-col col2'>${price}</p>
                </div>
                <div>
                  <div onClick={() => addToCart({list})} className='add-to-cart'>
                    <img src={addToCartIcon} alt='cart'/>
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default Product