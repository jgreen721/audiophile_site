import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppStore'
import {Header,ProductItem} from "./components"
import {Items} from "../Home/components"
import { motion } from 'framer-motion'
import { pageVar } from '../../variants'
import "./ProductView.css"

const ProductView = () => {
    const params = useParams()
    const {updateProductData,productData} = useAppContext();
    //  console.log(params)

    useEffect(()=>{
        updateProductData(params.product)
    },[params.product])



  return  (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}} className="product-views-container">
        <Header product={params.product}/>
        <div className="products-padding">
        <ul className="product-views-list">
        {productData.map((p,idx)=>(
            <ProductItem key={p.id} product={p} isEven={(idx + 1) % 2 == 0}/>
        ))}
        </ul>
        {/* <Items/> */}
        </div>
    </motion.div>
  )
}

export default ProductView