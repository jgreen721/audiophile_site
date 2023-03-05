import React from 'react'
import Item from "./Item"
import "./Item.css"
import {motion} from "framer-motion"
import { parentVar, slideLeftVar } from '../../../../variants'

const Items = () => {
    var items = [
        {id:1,name:"Headphones",img:"./assets/shared/desktop/image-category-thumbnail-headphones.png"},
        {id:2,name:"Speakers",img:"./assets/shared/desktop/image-category-thumbnail-speakers.png"},
        {id:3,name:"Earphones",img:"./assets/shared/desktop/image-category-thumbnail-earphones.png"},
    ]
  return (
    <motion.div variants={parentVar} initial="initial" animate="animate" className="items-row">
        {items.map(i=>(
            <motion.div className="item-card" key={i.id} variants={slideLeftVar}>
            <Item key={i.id} item={i}/>
            </motion.div>
        ))}
    </motion.div>
  )
}

export default Items