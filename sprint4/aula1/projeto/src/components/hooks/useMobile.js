import { useEffect, useState } from "react"

export const UseMobile =(breakpoint)=>{

    const[isMobile, setIsMobile] = useState(false);

    useEffect(()=>{

        function handleResize(){
          //  console.log(window.innerWidth); // ver o tamanho do menu
            if(window.innerWidth < breakpoint){
               
                    setIsMobile(true);
                    console.log('mobile');
                
                
            } else if(window.innerWidth >= breakpoint){
              
                    setIsMobile(false);
                    console.log('Desktop');
                
                
            }
        }

        handleResize(); // pra entrar na função e saber qual dispositivo ta

        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        }
    },[])

    return isMobile;
}