import React from 'react'
import IncludedItem from "./IncludedItem"
import { useAppContext } from '../../../../context/AppStore'
import "./InBoxList.css"

const InBoxList = () => {
  const {productInfo} = useAppContext();
  return (
    <div className="included-items-list-container">
      <div className="included-list-col">
            <h2 className="included-header">In the Box</h2>
</div>
<div className="included-list-col">
    <ul className="included-items-list">
      {productInfo?.includes.map(i=>(
        <IncludedItem item={i} key={i.item}/>
      ))}
      
    </ul>
  </div>
    </div>
  )
}

export default InBoxList