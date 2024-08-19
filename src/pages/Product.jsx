import React, {useState} from 'react'
import './styles/Product.css'
import data from '../../data.json'
import addToCart from '../assets/images/icon-add-to-cart.svg'

function Product() {

  const [count, setCount] = useState(0)
  
  return (
    <section className='Product-wrap'>
      <div className='ProductH'>
        <h1>Desserts</h1>
      </div>
      <div>
        <div className= 'cardbody'>
          {data.map(({name, category, price, image: {thumbnail, mobile, tablet, desktop}, index}) => {
            return (
              <div className='cardwrap'>
                {/* <p>{pro.name}</p> */}
                <img
                  key={index}
                  src={desktop}
                  alt="product"
                  className='img-size'/>
                <div className='text-div'>
                  <p>{category}</p>
                  <p className='price-col'>{name}</p>
                  <p className='price-col col2'>${price}</p>
                </div>
                <div>
                  <div className='add-to-cart'>
                    <img src={addToCart} alt='cart'/>
                    <p>Add to Cart</p>
                  </div>
                  <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                  </button>  
                  {/* <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                  </button>   */}
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