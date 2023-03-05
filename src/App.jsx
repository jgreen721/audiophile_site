import './App.css'
import {Navbar,Footer} from "./components"
import {Home,Headphones, Speakers, Earphones} from "./views"
import {Routes, Route} from "react-router-dom"
import { useAppContext } from './context/AppStore'

function App() {
  const {appTheme} = useAppContext();

  return (
    <div data-theme={appTheme} className="app">
               <Navbar/>

       {/* <div className="app-container"> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/headphones" element={<Headphones/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/earphones" element={<Earphones/>}/>
        </Routes>
        {/* </div> */}
        <Footer/>
    </div>
  )
}

export default App
