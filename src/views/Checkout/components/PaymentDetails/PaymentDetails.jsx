import React from 'react'
import FormDiv from "../FormDiv/FormDiv"
import "./PaymentDetails.css"

const PaymentDetails = () => {

  const togglePaymentOptions=(e)=>{
    console.log(e.target)
    e.target.closest(".payment-col").querySelectorAll(".circle").forEach(c=>c.classList.remove("highlight-circle"));
    e.target.classList.add('highlight-circle')
  }
  return (
    <div className="details-container">
              <h4 className="tan form-header">Payment Details </h4>
<div className="payment-row">
  <div className="payment-col">
  <div>
        <label htmlFor="methods">
            <p className="methods">Payment Methods</p>
          </label>
      </div>
  </div>
  <div className="payment-col">
    <div className="payment-input">
      <div onClick={togglePaymentOptions} className="circle"></div>
      <p className="payment-option-p">e-Money</p>
    </div>
    <div className="payment-input">
    <div onClick={togglePaymentOptions} className="circle"></div>
      <p className="payment-option-p">Cash on Delivery</p>
    </div>
  </div>
</div>
<div className="payment-row">
  <FormDiv label="e-Money Number" dictionary="emoneyplan" placeholder="238521993"/>
  <FormDiv label="e-Money Pin" dictionary="emoneypin" placeholder="6891"/>
</div>
    </div>
  )
}

export default PaymentDetails