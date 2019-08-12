import React, { useContext } from 'react'

// Components
import ShoppingCartItem from './ShoppingCartItem'
import { CartContext } from '../contexts/CartContext'
import { ProductsContext } from '../contexts/ProductsContext'

const ShoppingCart = () => {
  const cart = useContext(CartContext)
  const { removeItem } = useContext(ProductsContext)
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price
      }, 0)
      .toFixed(2)
  }

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <ShoppingCartItem key={item.id} removeItem={removeItem} {...item} />
      ))}

      {console.log()}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart
