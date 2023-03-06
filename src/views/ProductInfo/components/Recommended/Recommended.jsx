import React from 'react'
import { RecommendedItem } from './components'
import {useAppContext} from "../../../../context/AppStore"
import "./Recommended.css"

const Recommended = () => {
  const {productInfo} = useAppContext();
  return (
    <div className="recommended-container">
      <h2 className="recommended-header">You may also like</h2>
      <ul className="recommended-list">
        {productInfo.others.map(i=>(
          <RecommendedItem key={i.slug} item={i}/>
        ))}
      </ul>
    </div>
  )
}

export default Recommended