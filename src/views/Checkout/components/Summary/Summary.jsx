import React from 'react'
import "./Summary.css"
import SummaryItem from "./SummaryItem"
import {formatPrice} from "../../../../utils/formatPrice"
import {useAppContext} from "../../../../context/AppStore"

const Summary = ({handleConfirmDetails}) => {
    const {cartData,cartTotal} = useAppContext()


  
  return (
    <div className="summary-card">
        <h5 className="summary-header">Summary </h5>
        <ul className="summary-items-list">
            {cartData.map(c=>(
                <SummaryItem item={c} key={c.name}/>
            ))}
        </ul>
        <div className="summary-stats">
            <div className="summary-row between">
                <p className="summary-category">Total</p>
                <h5 className="summary-value">${formatPrice(cartTotal)}</h5>
            </div>
            <div className="summary-row between">
                <p className="summary-category">Shipping</p>
                <h5 className="summary-value">$50</h5>
            </div>
            <div className="summary-row between">
                <p className="summary-category">VAT (Included)</p>
                <h5 className="summary-value">${formatPrice(Math.floor(cartTotal/5))}</h5>
            </div>
            <div className="summary-row between">
                <p className="summary-category">Grand Total</p>
                <h5 className="summary-value tan">${formatPrice(cartTotal + 50)}</h5>
            </div>
        </div>
        <button onClick={handleConfirmDetails} className="btn primary-btn summary-btn">Continue & Pay</button>
        </div>
  )
}

export default Summary