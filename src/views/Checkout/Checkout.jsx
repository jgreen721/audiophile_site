import React, { useRef, useContext } from 'react'
import {Link} from "react-router-dom"
import { ShippingDetails,PaymentDetails, BillingDetails, Summary,ThankYou } from './components'
import "./Checkout.css"
import { useAppContext } from '../../context/AppStore'

const Checkout = () => {
  const {validateInputs} = useAppContext();
  const formRef = useRef();


  const handleConfirmDetails=()=>{
      console.log("handleConfirmDetails fired!");
      validateInputs(formRef)

  }
  return (
    <div className="checkout-container">
      <ThankYou/>
       <div className="backbtn-div">
        <Link className="go-back-btn" to="/">Go Back</Link>
      </div>
      <div className="checkout-content-container">
        <div ref={formRef} className="checkout-form">
          <h3 className="checkout-header">Checkout</h3>
          <BillingDetails/>
          <ShippingDetails/>
          <PaymentDetails/>
        </div>
        <div className="summary-form">
          <Summary handleConfirmDetails={handleConfirmDetails}/>
        </div>
      </div>
    </div>
  )
}

export default Checkout