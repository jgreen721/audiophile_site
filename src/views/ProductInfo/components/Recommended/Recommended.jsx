import React, {useRef} from 'react'
import { RecommendedItem } from './components'
import {useObserver} from "../../../../hooks/useObserver"
import {useAppContext} from "../../../../context/AppStore"
import "./Recommended.css"

const Recommended = () => {
  const {productInfo} = useAppContext();
  const recRef = useRef();
  const {inView} = useObserver(recRef)
  return (
    <div ref={recRef} className="recommended-container">
      <h2 className="recommended-header">You may also like</h2>
      <ul className="recommended-list">
        {productInfo.others.map((i,idx)=>(
          <RecommendedItem inView={inView} i={`${idx * .25}s`} key={i.slug} item={i}/>
        ))}
      </ul>
    </div>
  )
}

export default Recommended