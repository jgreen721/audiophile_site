import React, {useRef} from 'react'
import IncludedItem from "./IncludedItem"
import {useObserver} from "../../../../hooks/useObserver"
import { useAppContext } from '../../../../context/AppStore'
import "./InBoxList.css"

const InBoxList = () => {
  const {productInfo} = useAppContext();
  const boxRef = useRef();
  const {inView} = useObserver(boxRef)
  return (
    <div ref={boxRef} className="included-items-list-container">
      <div className="included-list-col">
            <h2 className="included-header">In the Box</h2>
</div>
<div className="included-list-col">
    <ul className="included-items-list">
      {productInfo?.includes.map((i,idx)=>(
        <IncludedItem i={`${(idx * .25)}s`} inView={inView} item={i} key={i.item}/>
      ))}
      
    </ul>
  </div>
    </div>
  )
}

export default InBoxList