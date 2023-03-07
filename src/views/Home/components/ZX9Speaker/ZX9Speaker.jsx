import React, {useRef} from 'react'
import useObserver from '../../../../hooks/useObserver'
import "./ZX9Speaker.css";
import {Link} from "react-router-dom";

const ZX9Speaker = () => {
  const zx9Ref = useRef()
  const {inView} = useObserver(zx9Ref)
  return (
    <div ref={zx9Ref} className={inView ? "zx-container turn-tan" : "zx-container"}>
        <img className="svg-circles" src="./assets/home/desktop/pattern-circles.svg" alt="" />
        <div className="zx-img-container">
            <picture>
      <source media="(min-width:1050px)" srcSet="./assets/home/desktop/image-speaker-zx9.png"/>
      <source media="(min-width:465px)" srcSet="./assets/home/tablet/image-speaker-zx9.png"/>
      <img style={{"--i":"0s"}} className={inView ? "zx-img show" : "zx-img no-opacity"} src="./assets/home/mobile/image-speaker-zx9.png" alt="img"/>
            </picture>
        </div>
        <div className="zx-content">
        <header className="zx-header">
        <h1 style={{"--i":".25s"}} className={inView ? "zx-h1 slide-center" : "zx-h1 hide-left"}>ZX9</h1>
        <h1 style={{"--i":".5s"}} className={inView ? "zx-h1 slide-center" : "zx-h1 hide-left"}>Speaker</h1>
        </header>
        <p style={{"--i":".75s"}} className={inView ? "zx-blurb slide-center" : "zx-blurb hide-left"}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to={`/product_info/zx9-speaker`}>

        <button style={{"--i":"1s"}} className={inView ? "btn secondary-btn btn-secondary zx9-btn slide-center" : "btn secondary-btn btn-secondary hide-left"}>See Product</button>
        </Link>

        </div>
    </div>
  )
}

export default ZX9Speaker