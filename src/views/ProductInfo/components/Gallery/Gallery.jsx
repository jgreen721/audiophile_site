import React from 'react'
import { useAppContext } from '../../../../context/AppStore'
import "./Gallery.css"

const Gallery = () => {
  const {productInfo} = useAppContext();
  console.log(productInfo)

  return (
    <div className="gallery-container">
      <div className="gallery-col">
        <div className="gallery-row">
        <div className="gallery-img-container">

        <picture>
      <source media="(min-width:850px)" srcSet={productInfo.gallery.first.desktop} />
      <source media="(min-width:550px)" srcSet={productInfo.gallery.first.tablet} />
      <img className="gallery-img" src={productInfo.gallery.first.mobile} alt="img"/>
    </picture>
    </div>
        </div>
        <div className="gallery-row">
        <div className="gallery-img-container">

        <picture>
      <source media="(min-width:850px)" srcSet={productInfo.gallery.second.desktop} />
      <source media="(min-width:550px)" srcSet={productInfo.gallery.second.tablet} />
      <img className="gallery-img" src={productInfo.gallery.second.mobile} alt="img"/>
    </picture>
    </div>
        </div>
      </div>
      <div className="gallery-col">
        <div className="gallery-img-container">
      <picture>
      <source media="(min-width:850px)" srcSet={productInfo.gallery.third.desktop} />
      <source media="(min-width:550px)" srcSet={productInfo.gallery.third.tablet} />
      <img className="gallery-img" src={productInfo.gallery.third.mobile} alt="img"/>
    </picture>
    </div>
      </div>
    </div>
  )
}

export default Gallery