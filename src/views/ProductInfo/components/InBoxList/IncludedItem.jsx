import React from 'react'

const IncludedItem = ({item}) => {
  return (
    <li className="included-item">

    <span className="tan mr-2">{item.quantity}x</span>
    <span className="faded">{item.item} </span>


    </li>
  )
}

export default IncludedItem