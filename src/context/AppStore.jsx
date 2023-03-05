import {useContext,createContext,useEffect,useState} from "react"


const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext);





export const AppProvider = ({children})=>{
                const [appTheme,setAppTheme] = useState("light")
                const [currUser,setCurrUser] = useState({});
                const [data,setData] = useState([]);
                const [productData,setProductData] = useState([]);
                const [showMobileMenu, setShowMobileMenu] = useState(false)



                useEffect(()=>{
                    fetch("data.json")
                    .then(res=>res.json())
                    .then(res=>{
                        console.log("Data",res)
                    })
                },[]);




    const values={
        currUser,
        appTheme,
        showMobileMenu,
        setShowMobileMenu
    }

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}