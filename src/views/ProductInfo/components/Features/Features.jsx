import React, {useRef} from 'react'
import "./Features.css"
import {useAppContext} from "../../../../context/AppStore"
import {useObserver} from "../../../../hooks/useObserver"

const Features = () => {
  const {productInfo} = useAppContext()
  const featuresRef = useRef()
  const {inView} = useObserver(featuresRef)

  // console.log(productInfo)
  return (
    <div ref={featuresRef} className="features-card">
      <h2 style={{"--i":".75s"}} className={inView ? "features-header bring-down" : "features-header raise-hide-el"}>Features</h2>
      <p style={{"--i":".25s"}} className={inView ? "features-blurb bring-down" : "features-blurb raise-hide-el"}>{productInfo.features}</p>
    </div>
  )
}

export default Features