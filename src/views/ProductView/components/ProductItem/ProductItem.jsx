import React from 'react'
import ImageCard from "../ImageCard/ImageCard"
import ContentCard from "../ContentCard/ContentCard"
import "./ProductItem.css"
const ProductItem = ({product,isEven}) => {
    // console.log(product)
  return (
    <li className="product-item">
      <div className={!isEven ? "product-item-col slide-down" : "product-item-col"}>
        {!isEven ? <ContentCard content={product} hasMargin={false}/> : <ImageCard img={product.image}/>}
      </div>
        <div className={!isEven ? "product-item-col slide-up" : "product-item-col"}>
        {!isEven ?  <ImageCard img={product.image} hasMargin={true}/> : <ContentCard content={product} hasMargin={true}/>}
        </div>
    </li>
  )
}

export default ProductItem