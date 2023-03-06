import React from 'react'
import {Hero,Items, YX1Earphones, ZX7Speaker, ZX9Speaker} from "./components"

const Home = () => {


 const handleScroll = (e)=>{
   console.log("helo")
 }
  return (
    <div onScroll ={handleScroll}>
      <Hero/>
      <div className="padding-content-container">
      <Items/>
      <ZX9Speaker/>
      <ZX7Speaker/>
      <YX1Earphones/>
      </div>
    </div>
  )
}

export default Home