import React from 'react'
import {CartInfo,CartItem} from "./components"
import {Link} from "react-router-dom";
import { useAppContext } from '../../context/AppStore'
import "./ShoppingCart.css"
import { formatPrice } from '../../utils/formatPrice'

const ShoppingCart = () => {
    const {showCart,setShowCart, cartData,cartTotal} = useAppContext();
  return (
    <div className={showCart ? 'cart-container' : 'cart-container hide-cart'}>
        <div className="cart-card">
       <CartInfo totalItems={cartData.length}/>
       <ul className="cartitems-list">
       {cartData.map(c=>(
         <CartItem key={c.name} item={c}/>
       ))}
       </ul>
       <div className="between cart-total-row">
         <p className="total-header">Total</p>
         <p className="cart-total">${formatPrice(cartTotal)}</p>
       </div>
       <Link onClick={()=>{setShowCart(false), window.scrollTo(0,0)}} to="/checkout">
       <button className="btn primary-btn checkout-btn">Checkout</button>
       </Link>
      </div>
        </div>
  )
}

export default ShoppingCart