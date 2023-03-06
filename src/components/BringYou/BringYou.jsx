import React from 'react'
import "./BringYou.css"

const BringYou = () => {
  return (
    <section className="bringyou-section">
        <div className="bringyou-column">

<div className="mobile-bringyou-img-container">
        <picture>
    <source media="(min-width:850px)" srcSet="./assets/shared/desktop/image-best-gear.jpg"/>
    <source media="(min-width:465px)" srcSet="./assets/shared/tablet/image-best-gear.jpg"/>
    <img className="bringyou-img" src="./assets/shared/mobile/image-best-gear.jpg" alt="img"/>
  </picture>
</div>
            <div className="bringyou-content-card">
                <h2 className="bringyou-header">Bringing you the <span className="tan">BEST</span> Audio Gear</h2>
                <p className="bringyou-blurb">
                Bringing you the best audio gear
  Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
  rooms available for you to browse and experience a wide range of our products. Stop by our store 
  to meet some of the fantastic people who make Audiophile the best place to buy your portable 
  audio equipment.
                </p>
            </div>
        </div>
        <div className="bringyou-column">
            <div className="bringyou-img-container">

  <picture>
    <source media="(min-width:850px)" srcSet="./assets/shared/desktop/image-best-gear.jpg"/>
    <source media="(min-width:465px)" srcSet="./assets/shared/tablet/image-best-gear.jpg"/>
    <img className="bringyou-img" src="./assets/shared/mobile/image-best-gear.jpg" alt="img"/>
  </picture>
  </div>

  <div className="mobile-bringyou-content-card">
                <h2 className="bringyou-header">Bringing you the <span className="tan">BEST</span> Audio Gear</h2>
                <p className="bringyou-blurb">
                Bringing you the best audio gear
  Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
  earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
  rooms available for you to browse and experience a wide range of our products. Stop by our store 
  to meet some of the fantastic people who make Audiophile the best place to buy your portable 
  audio equipment.
                </p>
            </div>
            
        </div>
    </section>
  )
}

export default BringYou