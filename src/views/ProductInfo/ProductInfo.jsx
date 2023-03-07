import React, { useEffect } from 'react'
import {ProductInfoHeader,Features, Gallery, InBoxList, Recommended} from "./components"
import "./ProductInfo.css"
import {useAppContext} from "../../context/AppStore"
import {Link, useParams} from "react-router-dom"
import { motion } from 'framer-motion'

const ProductInfo = () => {
  const params = useParams();
  const {productInfo,getProductInfo} = useAppContext();

  console.log(params.productname,productInfo);

  useEffect(()=>{
    getProductInfo(params.productname)
  },[productInfo]);
  return  productInfo?.name ?
  (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}} className="product-info-container">
      <div className="backbtn-div">
        <Link className="go-back-btn" to="/">Go Back</Link>
      </div>
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

      
      </motion.div>
  ) : "Loading..."
}

export default ProductInfo