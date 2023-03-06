import React from 'react'
import "./ImageCard.css"


const ImageCard = ({img}) => {
  return (
    <div className="imagecard-container">
      <picture>
        <source media="(min-width:850px)" srcSet={img.desktop}/>
        <source media="(min-width:465px)" srcSet={img.tablet}/>
        <img className="productcard-img" src={img.mobile} alt="img"/>
      </picture>
    </div>
  )
}

export default ImageCard