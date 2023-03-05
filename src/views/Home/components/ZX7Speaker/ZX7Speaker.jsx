import React from 'react'
import "./ZX7Speaker.css"

const ZX7Speaker = () => {
  return (
    <div className="zx7-container">
        <div className="zx7-img-container">
        
            <picture>
      <source media="(min-width:850px)" srcSet="./assets/home/desktop/image-speaker-zx7.jpg"/>
      <source media="(min-width:450px)" srcSet="./assets/home/tablet/image-speaker-zx7.jpg"/>
      <img className="zx7-img" src="./assets/home/mobile/image-speaker-zx7.jpg" alt="img"/>
    </picture>
        </div>
        <div className="zx7-content-overlay">
        <div className="zx7-content">
        <h2 className="zx7-h1">ZX7 Speaker </h2>
        <button className="btn zx7-btn">See Product</button>
        </div>
        </div>
    </div>
  )
}

export default ZX7Speaker