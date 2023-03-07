import React, {useRef} from 'react'
import "./BringYou.css"
import useObserver from "../../hooks/useObserver"

const BringYou = () => {
  const bringYouRef = useRef()
  const {inView} = useObserver(bringYouRef)
  return (
    <section ref={bringYouRef} className="bringyou-section">
        <div className="bringyou-column">

<div className="mobile-bringyou-img-container">
        <picture>
    <source media="(min-width:850px)" srcSet="./assets/shared/desktop/image-best-gear.jpg"/>
    <source media="(min-width:465px)" srcSet="./assets/shared/tablet/image-best-gear.jpg"/>
    <img style={{"--i":".5s"}} className={inView ? "bringyou-img" : "bringyou-img hide-right"} src="./assets/shared/mobile/image-best-gear.jpg" alt="img"/>
  </picture>
</div>
            <div className="bringyou-content-card">
                <h2 style={{"--i":".5s"}}  className={inView ? "bringyou-header bring-down" : "bringyou-header raise-hide-el"}>Bringing you the <span className="tan">BEST</span> Audio Gear</h2>
                <p style={{"--i":".5s"}} className={inView ? "bringyou-blurb pop-up" : "bringyou-blurb lower-el"}>
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
    <img style={{"--i":".5s"}} className={inView ? "bringyou-img right-slide-center" : "bringyou-img hide-right"} src="./assets/shared/mobile/image-best-gear.jpg" alt="img"/>
  </picture>
  </div>

  <div className="mobile-bringyou-content-card">
                <h2 style={{"--i":".5s"}}  className={inView ? "bringyou-header bring-down" : "bringyou-header raise-hide-el"}>Bringing you the <span className="tan">BEST</span> Audio Gear</h2>
                <p style={{"--i":".5s"}} className={inView ? "bringyou-blurb pop-up" : "bringyou-blurb lower-el"}>
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