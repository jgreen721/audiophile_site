import React from 'react'
import {Link} from "react-router-dom"
import {useAppContext} from "../../context/AppStore"

const MobileItem = ({item}) => {
    const {showMobile,setShowMobile} = useAppContext();
  return (
    <li className="mobile-item">
           <img className="mobile-item-img" src={item.img} alt="item-img" />
        <h5 className="mobile-item-h5">{item.name}</h5>
        <Link to={`/${item.name.toLowerCase()}`}>
        <button onClick={()=>setShowMobile(!showMobile)} className="btn mobile-btn">
            SHOP
            <img className="arrow-icon" src="./assets/shared/desktop/icon-arrow-right.svg" alt="" />
        </button>
        </Link>
    </li>
  )
}

export default MobileItem