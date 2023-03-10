import React from 'react'
import {Link} from "react-router-dom"
import { ShippingDetails,PaymentDetails, BillingDetails, Summary,ThankYou } from './components'
import "./Checkout.css"

const Checkout = () => {
  return (
    <div className="checkout-container">
      <ThankYou/>
       <div className="backbtn-div">
        <Link className="go-back-btn" to="/">Go Back</Link>
      </div>
      <div className="checkout-content-container">
        <div className="checkout-form">
          <h3 className="checkout-header">Checkout</h3>
          <BillingDetails/>
          <ShippingDetails/>
          <PaymentDetails/>
        </div>
        <div className="summary-form">
          <Summary/>
        </div>
      </div>
    </div>
  )
}

export default Checkout