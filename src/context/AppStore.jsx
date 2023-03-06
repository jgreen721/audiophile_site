import {useContext,createContext,useEffect,useState} from "react"
import {useLocation} from "react-router-dom"


const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext);





export const AppProvider = ({children})=>{
                const [appTheme,setAppTheme] = useState("light")
                const [currUser,setCurrUser] = useState({});
                const [data,setData] = useState([]);
                const [productData,setProductData] = useState([]);
                const [productInfo, setProductInfo] = useState({});
                const [showMobileMenu, setShowMobileMenu] = useState(false)



                const onTop = () => {
                    window.scrollTo(0, 0);
                  }

                useEffect(()=>{
                    fetch("data.json")
                    .then(res=>res.json())
                    .then(res=>{
                        console.log("Data",res)
                        setData(res)
                        if(window.location.hash == "#/headphones" || window.location.hash == "#/speakers" || window.location.hash == "/#earphones"){
                            let temp = res;
                                temp = temp.filter(t=>t.category == window.location.hash.split("/")[1]);
                            setProductData(temp);
                            
                        }
                        if(window.location.hash.split("/").length > 2){
                            console.log("setting info on reload!",window.location.hash.split("/")[2])
                            let temp = res;
                            let slugComp = window.location.hash.split("/")[2]
                            console.log("TEMP",temp,slugComp)
                            temp = temp.filter(t=>t.slug == slugComp)[0]
                            console.log("TEMPPPPOBJ",temp)
                            setProductInfo(temp)
                        }
                    })
                },[]);


              


             


                const updateProductData=(category)=>{

                    let temp = data;
                        temp = temp.filter(t=>t.category == category);
                        setProductData(temp);
                        onTop();
                }

                const getProductInfo=(slug)=>{
                    let temp = data;
                    temp = temp.filter(t=>t.slug == slug)[0];
                     setProductInfo(temp);
                     onTop();

                }

                




    const values={
        currUser,
        appTheme,
        showMobileMenu,
        setShowMobileMenu,
        productData,
        updateProductData,

        productInfo,
        getProductInfo
    }

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}