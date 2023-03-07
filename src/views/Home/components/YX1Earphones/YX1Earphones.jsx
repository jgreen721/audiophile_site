import React, {useRef} from 'react'
import "./YX1Earphones.css"
import { Link } from 'react-router-dom'
import {useObserver} from "../../../../hooks/useObserver"

const VX1Earphones = () => {
  const yx1Ref = useRef();
  const {inView} = useObserver(yx1Ref)
  return (
    <div ref={yx1Ref} className="yx1-home-container">
        <div className="yx1-column">
          {/* <div className="yx1-home-img-container"> */}
        <picture>
          <source media="(min-width:1050px)" srcSet="./assets/home/desktop/image-earphones-yx1.jpg"/>
          <source media="(min-width:450px)" srcSet="./assets/home/tablet/image-earphones-yx1.jpg"/>
          <img style={{"--i":'1.5s'}} className={inView ? "yx1-img clear-focus" : "yx1-img blur"} src="./assets/home/mobile/image-earphones-yx1.jpg" alt="earphones-img"/>
        </picture>
    {/* </div> */}
        </div>
        <div className="yx1-column gray">
          <div className="yx1-home-content">
        <h4 style={{"--i":".5s"}} className={inView ? "yx1-home-h4 scale-grow" : "yx-home-h4 shrink"}>YX1Earphones </h4>
        <Link to={`/product_info/yx1-earphones`}>
        <button style={{"--i":"1s"}} className={inView ? "shop-btn btn outline-btn scale-grow" : "shop-btn btn outline-btn shrink"}>See Product</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default VX1Earphones