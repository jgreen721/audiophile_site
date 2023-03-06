import React from 'react'
import "./Features.css"
import {useAppContext} from "../../../../context/AppStore"

const Features = () => {
  const {productInfo} = useAppContext()

  console.log(productInfo)
  return (
    <div className="features-card">
      <h2 className="features-header">Features</h2>
      <p className="features-blurb">{productInfo.features}</p>
    </div>
  )
}

export default Features