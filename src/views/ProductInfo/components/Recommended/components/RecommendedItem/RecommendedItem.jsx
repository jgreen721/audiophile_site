import React from 'react'
import {Link} from "react-router-dom"
import { useAppContext } from '../../../../../../context/AppStore'
import "./RecommendedItem.css"

const RecommendedItem = ({item,inView,i}) => {
  const {getProductInfo} = useAppContext();

  
  return (
    <li style={{"--i":i}} className={inView ?"recommended-item clear-focus" : "recommended-item blur"}>
      <div className="rec-img-container">
      <picture>
  <source media="(min-width:650px)" srcSet={item.image.desktop}/>
  <source media="(min-width:465px)" srcSet={item.image.tablet}/>
  <img className="rec-img" src={item.image.mobile} alt="img"/>
</picture>
<h4 className="rec-item-header">{item.name}</h4>
<Link to={`/product_info/${item.slug}`}>
<button onClick={()=>getProductInfo(item.slug)} className="btn primary-btn m-auto">See Product</button>
</Link>
      </div>
    </li>
  )
}

export default RecommendedItem