import React from 'react'
import {Hero,Items, YX1Earphones, ZX7Speaker, ZX9Speaker} from "./components"
import { motion } from 'framer-motion'



const Home = () => {



  return (
    <motion.div initial={{x:'-100vw'}} animate={{x:'0vw',transition:{duration:1}}}>
      <Hero/>
      <div className="padding-content-container">
      <Items/>
      <ZX9Speaker/>
      <ZX7Speaker/>
      <YX1Earphones/>
      </div>
    </motion.div>
  )
}

export default Home