import React from 'react'
import "./CartItem.css"
import {formatPrice} from "../../../../utils/formatPrice"
import { useAppContext } from '../../../../context/AppStore'

const CartItem = ({item}) => {
  const {adjustQuantity} = useAppContext()
  console.log("Item",item)
  return (
    <li className="cart-item">
      <div className="cart-column">
        <div className="cart-img-div">
      <img className="cart-img" src={item.img} alt="img" />
      </div>
      <div>
        <p className="cart-name">{item.name}</p>
        <p className="cart-price">${formatPrice(item.price)}</p>
      </div>
      </div>
      <div className="cart-column">
        <div className="cart-quantity-row">
          <button onClick={()=>adjustQuantity(item,"-")} className="cart-quantity-btn">-</button>
          <p className="item-quantity">{item.quantity}</p>
          <button onClick={()=>adjustQuantity(item,"+")} className="cart-quantity-btn">+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem