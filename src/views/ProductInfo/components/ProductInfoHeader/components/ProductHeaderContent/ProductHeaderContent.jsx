import React, {useState} from 'react'
import { useAppContext } from '../../../../../../context/AppStore'
import "./ProductHeaderContent.css"


const ProductHeaderContent = () => {
    const {productInfo} = useAppContext();
    const [quantity,setQuantity] = useState(1);
  return (
    <div className="product-header-content-container">
      <div className="product-header-content">
{productInfo?.new && <h4 className="tan new-product">New Product</h4>}
<h2 className="product-info-h2">{productInfo?.name}</h2>
<p className="productinfo-description">{productInfo?.description}</p>
<h5 className="price">${productInfo?.price}</h5>
<div className="btn-row">
  <div className="counter-row">
    <button onClick={()=>setQuantity(()=>quantity-1)} className="add-to-cart-btn">-</button>
    <h5 className="quantity-h5">{quantity}</h5>
    <button onClick={()=>setQuantity(()=>quantity+1)} className="add-to-cart-btn">+</button>
  </div>
  <button className="btn primary-btn">Add to Cart</button>
</div>
      </div>
    </div>
  )
}

export default ProductHeaderContent