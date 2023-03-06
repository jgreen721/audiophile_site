import React from 'react'
import "./Hero.css"
import {Link} from "react-router-dom"

const Hero = () => {


  return (
    <header className="hero">
              <div className="hero-content-overlay">
            <h3 className="hero-h3 glow-letters">New Product</h3>
            <h1 className="hero-h1">XX99 MARK II HEADPHONES</h1>
            <p className="hero-blurb"> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
</p>

<Link to={`/product_info/xx99-mark-one-headphones`}>
<button className="btn primary-btn">See Product</button>
</Link>
        </div>
        <div className="hero-overlay">

<div className="hero-img-container">
        <picture>
    <source media="(min-width:1050px)" srcSet="./assets/home/desktop/image-hero.jpg"/>
    <source media="(min-width:450px)" srcSet="./assets/home/desktop/image-hero.jpg"/>
    <img className="hero-img" src="./assets/home/mobile/image-header.jpg" alt="headphone-img"/>
  </picture>
</div>
</div>

    </header>
  )
}

export default Hero