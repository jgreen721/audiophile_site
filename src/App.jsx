import './App.css'
import "./Animations.css"
import {Navbar,BringYou,Footer, MobileMenu} from "./components"
import {Home,ProductView,ProductInfo} from "./views"
import {Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { useAppContext } from './context/AppStore'
import {Items} from "./views/Home/components"

function App() {
  const {appTheme,animate} = useAppContext();
  const location = useLocation();

  console.log("Location",location);




  return (
    <div data-theme={appTheme} className={animate ? "app animate-app" : "app"}>
               <Navbar/>
               <div className="app-container">
               <MobileMenu/>

<AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product_info/:productname" element={<ProductInfo/>}/>
          <Route path="/:product" element={<ProductView/>}/>
       </Routes>
  </AnimatePresence>
       <div className="padding-container">
       {location.pathname != "/" && <Items/>}
        <BringYou/>
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default App
