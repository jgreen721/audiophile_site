import React from 'react'
import "./Header.css"

const Header = ({product}) => {
  return (
    <header className='productview-header'>
        <h2 className="product-header">{product.toUpperCase()}</h2>
    </header>
  )
}

export default Header