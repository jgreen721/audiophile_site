import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import useObserver from '../../../../hooks/useObserver'
import "./ZX7Speaker.css"

const ZX7Speaker = () => {
  const zx7Ref = useRef();
  const {inView} = useObserver(zx7Ref);


  return (
    <div ref={zx7Ref} className="zx7-container">
        <div className="zx7-img-container">
        
            <picture>
      <source media="(min-width:850px)" srcSet="./assets/home/desktop/image-speaker-zx7.jpg"/>
      <source media="(min-width:450px)" srcSet="./assets/home/tablet/image-speaker-zx7.jpg"/>
      <img style={{"--i":"0s"}} className={inView ? "zx7-img pop-up" : "zx7-img lower-el"} src="./assets/home/mobile/image-speaker-zx7.jpg" alt="img"/>
    </picture>
        </div>
        <div className="zx7-content-overlay">
        <div className="zx7-content">
        <h2 style={{"--i":".25s"}} className={inView ? "zx7-h1 slide-center" : "zx7-h1 hide-left"}>ZX7 Speaker </h2>
        <Link to={`/product_info/zx7-speaker`}>
        <button style={{"--i":".5s"}} className={inView ? "btn zx7-btn outline-btn slide-center" : "btn zx7-btn outline-btn hide-left"}>See Product</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default ZX7Speaker