import React, {useState, useEffect} from 'react'

export const useObserver = (el) => {

    const showEl=(e)=>{
        if(e[0].isIntersecting){
            // console.log("Show",e[0].target)
            setInView(true)
        }
        else{
            // console.log("Hide",e[0].target)

            setInView(false);
        }
    }
    const [inView,setInView] = useState(false);
    const elObserver = new IntersectionObserver(showEl);

    useEffect(()=>{
        if(el.current){
            elObserver.observe(el.current)
        }
    },[el])
  return {inView}
}

export default useObserver