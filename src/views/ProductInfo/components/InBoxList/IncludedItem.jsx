import React from 'react'

const IncludedItem = ({inView,item,i}) => {
  return (
    <li style={{"--i":`${i}`}} className={inView ? "included-item slide-center" : "included-item hide-left"}>

    <span className="tan mr-2">{item.quantity}x</span>
    <span className="faded">{item.item} </span>


    </li>
  )
}

export default IncludedItem