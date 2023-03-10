import React from 'react'
import { useAppContext } from '../../context/AppStore'

const NavBurger = () => {
    const {showMobile, setShowMobile} = useAppContext();
  return (
    <div onClick={()=>setShowMobile(!showMobile)} className="burger-div">
    <svg className={!showMobile ? "burger" : "burger close-menu"}>
    <rect className="rect rect1" x="0" width="50" height="2" y="10"/>
    <rect className="rect rect2" x="0" width="50" height="2" y="15"/>
    <rect className="rect rect3" x="0" width="50" height="2" y="20"/>
    </svg>
  </div>
  )
}

export default NavBurger