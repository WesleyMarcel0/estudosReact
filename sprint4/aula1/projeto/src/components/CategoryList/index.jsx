import { UseMobile } from "../hooks/useMobile"

export const CategoryList = ({mobileList, desktopList}) =>{

    const isMobile = UseMobile(800);
    console.log(isMobile);


    return(
        <>
         {isMobile ? mobileList : desktopList }
        </>
    )
}