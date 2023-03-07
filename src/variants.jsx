export const parentVar={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:1,
            delayChildren:.5
        }
    }
}



export const slideLeftVar={
    initial:{
        x:-2000,
        opacity:0
       
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
        
        }
    }
}



export const pageVar={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:1,
            delayChildren:.5
        }
    },
    exit:{
        scale:0,
        transition:{
            duration:2,
        }
    }
}