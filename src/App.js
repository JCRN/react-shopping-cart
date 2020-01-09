import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'

// Contexts
import { ProductsContext } from './contexts/ProductsContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = item => {
    setCart([...cart, item])
  }

  const removeItem = item => {
    setCart(cart.filter(item => !item.id))
  }

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <ProductsContext.Provider value={{ products, addItem, removeItem }}>
          <Navigation cart={cart} />
        </ProductsContext.Provider>
      </CartContext.Provider>

      {/* Routes */}
      <CartContext.Provider value={cart}>
        <ProductsContext.Provider value={{ products, addItem, removeItem }}>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </ProductsContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default App
