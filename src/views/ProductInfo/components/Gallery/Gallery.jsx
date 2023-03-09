import React, {useRef} from 'react'
import { useAppContext } from '../../../../context/AppStore'
import useObserver from '../../../../hooks/useObserver';
import "./Gallery.css"

const Gallery = () => {
  const {productInfo} = useAppContext();
  const galleryRef = useRef();
  const {inView} = useObserver(galleryRef);
  
  // console.log(productInfo)

  return (
    <div ref={galleryRef} className="gallery-container">
      <div className="gallery-col">
        <div className="gallery-row">
        <div style={{"--i":".25s"}} className={inView ? "gallery-img-container reg-right-slide-center" : "gallery-img-container"}>

        <picture>
      <source media="(min-width:850px)" srcSet={productInfo.gallery.first.desktop} />
      <source media="(min-width:550px)" srcSet={productInfo.gallery.first.tablet} />
      <img className="gallery-img" src={productInfo.gallery.first.mobile} alt="img"/>
    </picture>
    </div>
        </div>
        <div className="gallery-row">
        <div style={{"--i":".5s"}} className={inView ? "gallery-img-container slide-center" : "gallery-img-container hide-left"}>

        <picture>
      <source media="(min-width:850px)" srcSet={productInfo.gallery.second.desktop} />
      <source media="(min-width:550px)" srcSet={productInfo.gallery.second.tablet} />
      <img className="gallery-img" src={productInfo.gallery.second.mobile} alt="img"/>
    </picture>
    </div>
        </div>
      </div>
      <div className="gallery-col">
        <div style={{"--i":".75s"}} className={inView ? "gallery-img-container scale-grow" : "gallery-img-container shrink"}>
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