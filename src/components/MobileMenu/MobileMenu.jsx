import React from 'react'
import "./MobileMenu.css"
import Item  from '../../views/Home/components/Items/Item'
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
            <motion.div className="item-card mobile-item" key={i.id} variants={slideLeftVar}>
                <Item key={i.id} item={i}/>
            </motion.div>

        ))}
    </div>
  )
}

export default MobileMenu