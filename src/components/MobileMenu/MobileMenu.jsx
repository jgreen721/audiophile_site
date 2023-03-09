import React from 'react'
import "./MobileMenu.css"
import MobileItem  from './MobileItem'
import { motion } from 'framer-motion'
import { slideLeftVar } from '../../variants'
import { useAppContext } from '../../context/AppStore'

const MobileMenu = () => {
    const {showMobile} = useAppContext();
    var items = [
        {id:1,name:"Headphones",img:"./assets/shared/desktop/image-category-thumbnail-headphones.png"},
        {id:2,name:"Speakers",img:"./assets/shared/desktop/image-category-thumbnail-speakers.png"},
        {id:3,name:"Earphones",img:"./assets/shared/desktop/image-category-thumbnail-earphones.png"},
    ]
  return (
    <div className={showMobile ? "mobile-menu" : "mobile-menu hide-mobile-menu"}>
        {items.map(i=>(
            <motion.div className="mobile-item" key={i.id} variants={slideLeftVar}>
                <MobileItem key={i.id} item={i} isMobile={true}/>
            </motion.div>

        ))}
    </div>
  )
}

export default MobileMenu