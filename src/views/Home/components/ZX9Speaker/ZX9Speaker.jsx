import React from 'react'
import "./ZX9Speaker.css"

const ZX9Speaker = () => {
  return (
    <div className="zx-container">
        <img className="svg-circles" src="./assets/home/desktop/pattern-circles.svg" alt="" />
        <div className="zx-img-container">
            <picture>
      <source media="(min-width:1050px)" srcSet="./assets/home/desktop/image-speaker-zx9.png"/>
      <source media="(min-width:465px)" srcSet="./assets/home/tablet/image-speaker-zx9.png"/>
      <img className="zx-img" src="./assets/home/mobile/image-speaker-zx9.png" alt="img"/>
            </picture>
        </div>
        <div className="zx-content">
        <header className="zx-header">
        <h1 className="zx-h1">ZX9</h1>
        <h1 className="zx-h1">Speaker</h1>
        </header>
        <p className="zx-blurb">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="btn secondary-btn btn-secondary m-auto">See Product</button>
        </div>
    </div>
  )
}

export default ZX9Speaker