import React from 'react'


const SummaryItem = ({item}) => {
  return (
    <li className="summary-item">
      <div className="summary-flex mr-2">
      <div className="summary-img-div">
        <img className="summary-img" src={item.img} alt="img" />
      </div>
      <div>
        <p className="summary-name">{item.name}</p>
        <p className="summary-price">${item.price}</p>
      </div>
      </div>
      <p className="summary-quantity">x{item.quantity}</p>
    </li>
  )
}

export default SummaryItem