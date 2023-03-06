import React, { useEffect } from 'react'
import {ProductInfoHeader,Features, Gallery, InBoxList, Recommended} from "./components"
import "./ProductInfo.css"
import {useAppContext} from "../../context/AppStore"
import {Link, useParams} from "react-router-dom"

const ProductInfo = () => {
  const params = useParams();
  const {productInfo,getProductInfo} = useAppContext();

  console.log(params.productname,productInfo);

  useEffect(()=>{
    getProductInfo(params.productname)
  },[productInfo]);
  return  productInfo?.name ?
  (
    <div className="product-info-container">
        <Link className="go-back-btn" to="/">Go Back</Link>
        <ProductInfoHeader/>
        <div className="features-box-row">
          <div className="features-col">
          <Features/>
          </div>
          <div className="included-col">
          <InBoxList/>
          </div>
        </div>
        <Gallery/>
        <Recommended/>

      
      </div>
  ) : "Loading..."
}

export default ProductInfo