import './App.css'
import {Navbar,BringYou,Footer} from "./components"
import {Home,ProductView,ProductInfo} from "./views"
import {Routes, Route} from "react-router-dom"
import { useAppContext } from './context/AppStore'
import {Items} from "./views/Home/components"

function App() {
  const {appTheme} = useAppContext();




  return (
    <div data-theme={appTheme} className="app">
               <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product_info/:productname" element={<ProductInfo/>}/>
          <Route path="/:product" element={<ProductView/>}/>
       </Routes>
        <Items/>
        <BringYou/>
        <Footer/>
    </div>
  )
}

export default App
