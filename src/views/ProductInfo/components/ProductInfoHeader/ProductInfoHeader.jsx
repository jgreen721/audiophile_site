import React from 'react'
import {ProductHeaderImg, ProductHeaderContent} from "./components"
import "./ProductInfoHeader.css"

const ProductInfoHeader = () => {
  return (
    <header className="productinfo-header">
      <div className="productinfo-header-col">
      <ProductHeaderImg/>
      </div>
      <div className="productinfo-header-col">
      <ProductHeaderContent/>
      </div>
    </header>
  )
}

export default ProductInfoHeader