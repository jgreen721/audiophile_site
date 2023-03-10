import React from 'react'
import {Link} from "react-router-dom";
import { useAppContext } from '../../../../context/AppStore';
import "./ThankYou.css"

const ThankYou = () => {
  const {showThanks} = useAppContext();
  return (
    <div className={showThanks ? "thankyou-parent" : "thankyou-parent hide-thanks"}>
      <div className="thankyou-card">
        <div className="thankyou-icon">
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
        </div>
        <h2 className="h2 thankyou-header">Thank you for your order</h2>
    <p className="confirmation-p">You will receieve an email confirmation shortly.</p>
    <Link to="/">
    <button className="btn primary-btn thanks-btn">Back to Home</button>
    </Link>
      </div>
    </div>
  )
}

export default ThankYou