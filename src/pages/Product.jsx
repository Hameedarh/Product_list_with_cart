import React, {useContext, useEffect, useState} from 'react'
import './styles/Product.css'
import list from '../../data.json'
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import { CartContext } from '../context/Cart'

function Product() {

  const [products, setProducts]= useState([])

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data.products)
  }
  useEffect(() => {
    getProducts();
  }, [])

  const [count, setCount] = useState(0)
  const { cartItems, addToCart } = useContext(CartContext)
  
  return (
    <section className='Product-wrap'>
      <div className='ProductH'>
        <h1>Market</h1>
      </div>
      <div className= 'card-wrapper'>
        <div className= 'cardbody'>
          {products.map((product) => {
            return (
              <div className='cardwrap' key={product.id}>
                <img
                  src={product.thumbnail} 
                  alt="product"
                  className='img-size'/>
                <div className='text-div'>
                  <p>{product.category}</p>
                  <p className='price-col'>{product.title}</p>
                  <p className='price-col col2'>${product.price}</p>
                </div>
                <div>
                  <div onClick={() => addToCart({product})} className='add-to-cart'>
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