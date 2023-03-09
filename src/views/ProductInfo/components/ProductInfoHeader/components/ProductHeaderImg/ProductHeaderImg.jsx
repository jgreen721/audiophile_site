import React from 'react'
import { useAppContext } from '../../../../../../context/AppStore'
import "./ProductHeaderImg.css"

const ProductHeaderImg = () => {
  const {productInfo} = useAppContext();

  // console.log(productInfo);
  return (
    <div className="product-header-img-container">
      <picture>
  <source media="(min-width:650px)" srcSet={productInfo.image.desktop}/>
  <source media="(min-width:465px)" srcSet={productInfo.image.tablet}/>
  <img className="product-header-img" src={productInfo.image.mobile} alt="img"/>
</picture>
    </div>
  )
}

export default ProductHeaderImg