import {useContext,createContext,useEffect,useState} from "react"


const AppContext = createContext();

export const useAppContext = ()=>useContext(AppContext);





export const AppProvider = ({children})=>{
                const [appTheme,setAppTheme] = useState("light")
                const [animate,setAnimate] = useState(true)
                const [showMobile,setShowMobile] = useState(false)
                const [currUser,setCurrUser] = useState({});
                const [data,setData] = useState([]);
                const [productData,setProductData] = useState([]);
                const [productInfo, setProductInfo] = useState({});
                const [cartData,setCartData] = useState([]);
                const [cartTotal,setCartTotal] = useState(0)
                const [showCart, setShowCart] = useState(false);
                const [showThanks, setShowThanks] = useState(false);
                // const [showMobileMenu, setShowMobileMenu] = useState(false)



                const onTop = () => {
                    window.scrollTo(0, 0);
                  }

                useEffect(()=>{
                    fetch("data.json")
                    .then(res=>res.json())
                    .then(res=>{
                        // console.log("Data",res)
                        setData(res)
                        if(window.location.hash == "#/headphones" || window.location.hash == "#/speakers" || window.location.hash == "/#earphones"){
                            let temp = res;
                                temp = temp.filter(t=>t.category == window.location.hash.split("/")[1]);
                            setProductData(temp);
                            
                        }
                        if(window.location.hash.split("/").length > 2){
                            // console.log("setting info on reload!",window.location.hash.split("/")[2])
                            let temp = res;
                            let slugComp = window.location.hash.split("/")[2]
                            // console.log("TEMP",temp,slugComp)
                            temp = temp.filter(t=>t.slug == slugComp)[0]
                            // console.log("TEMPPPPOBJ",temp)
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


                const addToCart=(item)=>{
                    console.log("cartItem",item);
                    let temp = cartData;
                    let idx = cartData.findIndex(i=>i.name == item.name);
                    if(idx < 0){
                        setCartData([...cartData, item]);
                        temp.push(item);
                    }
                    else{
                        temp[idx].quantity = item.quantity
                        setCartData(temp);
                    }

                    findCartTotal(temp);
                }


                const clearCart=()=>{
                    setCartData([]);
                    setCartTotal(0);
                    console.log("clearCart!")
                }

                const adjustQuantity=(item,dir)=>{

                    let temp = cartData;
                    let idx = temp.findIndex(i=>i.name == item.name);
                    console.log("adjustQuantity fired!!",temp[idx].quantity)
                    if(dir == "+"){
                        console.log('add quant!!')
                        temp[idx].quantity++
                    }
                    else{
                        temp[idx].quantity--
                    }
                    // temp[idx].quantity = dir == "+" ? temp[idx].quantity++ : temp[idx].quantity--

                    if(temp[idx].quantity == 0){
                        temp = temp.filter(t=>t.name != item.name);
                        console.log('removed item!!')
                    }
                    setCartData(temp);
                    findCartTotal(temp)
                }

                const findCartTotal = (items)=>{
                    let tempTotal = 0;
                    items.forEach(item=>{
                        tempTotal += (parseInt(item.price) * parseInt(item.quantity))
                    })
                    setCartTotal(tempTotal)
                }


                const removeMenus=(e)=>{
                    if(!e.target.closest(".cart-card") && showCart){
                        setShowCart(false);
                    }
                    // console.log(e.target)
                    if(!e.target.closest(".mobile-menu") && showMobile){
                        setShowMobile(false);
                    }
                }

                




    const values={
        currUser,
        appTheme,
        // showMobileMenu,
        // setShowMobileMenu,
        productData,
        updateProductData,
        animate,
        showMobile,
        removeMenus,
        setShowMobile,
        addToCart,
        clearCart,
        cartData,
        cartTotal,
        adjustQuantity,
        showCart,
        setShowCart,
        showThanks,
        setShowThanks,
        productInfo,
        getProductInfo
    }

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}