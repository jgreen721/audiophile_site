import './App.css'
import "./Animations.css"
import {Navbar,BringYou,Footer} from "./components"
import {Home,ProductView,ProductInfo,Checkout} from "./views"
import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppContext } from './context/AppStore'
import {Items} from "./views/Home/components"

function App() {
  const {appTheme,animate,showMobile,removeMenus, showCart} = useAppContext();
  const location = useLocation();

  // console.log("Location",location);




  return (
    <div onClick={(e)=>removeMenus(e)} data-theme={appTheme} className={animate ? "app animate-app" : "app"}>
               <Navbar/>
               <div className={showMobile || showCart ? "app-container opaque" : "app-container"}>

<AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product_info/:productname" element={<ProductInfo/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/:product" element={<ProductView/>}/>
       </Routes>
  </AnimatePresence>
       <div className="padding-container">
       {location.pathname != "/" || location.pathname != "/checkout" && <Items/>}
        {location.pathname != "/checkout" && <BringYou/>}
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default App
