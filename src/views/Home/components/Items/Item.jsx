import React from 'react'
import {motion} from "framer-motion"


const Item = ({item}) => {
  return (
    <div className="item-card-content">
        <img className="item-img" src={item.img} alt="item-img" />
        <h5 className="item-h5">{item.name}</h5>
        <button className="btn shop-btn item-btn">
            SHOP 
            <img className="arrow-icon" src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </button>
    </div>
  )
}

export default Item