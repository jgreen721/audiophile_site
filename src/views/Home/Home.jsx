import React from 'react'
import {Hero,Items, ZX7Speaker, ZX9Speaker} from "./components"

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="padding-content-container">
      <Items/>
      <ZX9Speaker/>
      <ZX7Speaker/>
      </div>
    </div>
  )
}

export default Home