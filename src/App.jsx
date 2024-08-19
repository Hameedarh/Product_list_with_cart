import Product from './pages/Product'
import './App.css'
import ItemCheck from './pages/ItemCheck'

function App() {
  

  return (
    <div className='web-body'>
      <section className='web-section'>
        <div className='product-section'>
          <Product/>
        </div>
        <div className='check-section'>
          <ItemCheck/>
        </div>
      </section>
    </div>
  )
}

export default App
