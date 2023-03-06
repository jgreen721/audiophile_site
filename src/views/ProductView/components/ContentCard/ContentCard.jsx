import React from 'react'
import "./ContentCard.css"
import {Link} from "react-router-dom"


const ContentCard = ({content,hasMargin}) => {
  return (
    <div className="content-card-container">
      <div className={hasMargin ? "content-card ml-5" : "content-card"}>
        {content.new && <h5 className="new-product">New Product</h5>}
      <h2 className="content-h2">{content.name}</h2>
      <p className="content-description">{content.description}</p>
      <Link to={`/product_info/${content.slug}`}>
      <button  className="btn primary-btn m-auto">See Product</button>
      </Link>
      </div>
    </div>
  )
}

export default ContentCard