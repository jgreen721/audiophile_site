import React from 'react'
import "./YX1Earphones.css"
import { Link } from 'react-router-dom'

const VX1Earphones = () => {
  return (
    <div className="yx1-home-container">
        <div className="yx1-column">
          {/* <div className="yx1-home-img-container"> */}
        <picture>
          <source media="(min-width:1050px)" srcSet="./assets/home/desktop/image-earphones-yx1.jpg"/>
          <source media="(min-width:450px)" srcSet="./assets/home/tablet/image-earphones-yx1.jpg"/>
          <img className="yx1-img" src="./assets/home/mobile/image-earphones-yx1.jpg" alt="earphones-img"/>
        </picture>
    {/* </div> */}
        </div>
        <div className="yx1-column gray">
          <div className="yx1-home-content">
        <h4 className="yx1-home-h4">VX1Earphones </h4>
        <Link to={`/product_info/yx1-earphones`}>
        <button className="shop-btn btn outline-btn">See Product</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default VX1Earphones