import React from 'react'
import "./BillingDetails.css"
import FormDiv from "../FormDiv/FormDiv"

const BillingDetails = () => {
  return (
    <div className="billing-form-container details-container">
      <h4 className="tan form-header">Billing Details </h4>
      <div className="form-row">
        <FormDiv label="Name" dictionary="username" placeholder="Alexel Ward"/>
        <FormDiv label="Email Address" dictionary="email" placeholder="alexei@mail.com"/>
      </div>
      <FormDiv label="Phone Number" dictionary="phone" placeholder="+1 202-555-0136"/>

      </div>
  )
}

export default BillingDetails