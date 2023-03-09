import React from 'react'
import { useAppContext } from '../../../../context/AppStore'
import "./CartInfo.css"

const CartInfo = ({totalItems}) => {
  const {clearCart} = useAppContext();
  return (
    <div className="top-cart-row">
      <h4 className="cart-h4"> CART ({totalItems})</h4>
    <div>
      <button onClick={clearCart} className="clear-cart-btn">Remove All</button>
    </div>
    </div>
  )
}

export default CartInfo