import React from 'react'
import FormDiv from "../FormDiv/FormDiv"
import "./ShippingDetails.css"

const ShippingDetails = () => {
  return (
    <div className="details-container">
        <h4 className="tan form-header">Shipping Info </h4>
        <FormDiv label="Address" dictionary="address" placeholder="1137 Williams Avenue"/>

      <div className="form-row">
        <FormDiv label="Zip Code" dictionary="zip" placeholder="10001"/>
        <FormDiv label="City" dictionary="city" placeholder="New York"/>
      </div>
      <div className="form-row">
      <FormDiv label="Country" dictionary="country" placeholder="United States"/>
      <div className="empty-col"></div>
      </div>
    </div>
  )
}

export default ShippingDetails