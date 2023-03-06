import React from 'react'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import { useAppContext } from '../../../../context/AppStore'


const Item = ({item}) => {
  const {updateProductData} = useAppContext()

  // console.log(item)

  return (
    <div className="item-card-content">
        <img className="item-img" src={item.img} alt="item-img" />
        <h5 className="item-h5">{item.name}</h5>
        <Link to={`/${item.name.toLowerCase()}`}>
        <button className="btn shop-btn item-btn">
            SHOP
            <img className="arrow-icon" src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </button>
        </Link>
    </div>
  )
}

export default Item