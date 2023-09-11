import { UseMobile } from "../hooks/useMobile"
import { DesktopCategoryList } from "./desktop/inde";
import { MobileCategoryList } from "./mobile"


export const CategoryList = ({categoriesList,setFilter}) =>{

    const isMobile = UseMobile(800);
    console.log(isMobile);


    return(
       <>
       {isMobile ?<MobileCategoryList categoriesList={categoriesList} setFilter={setFilter}/> : <DesktopCategoryList categoriesList={categoriesList} setFilter={setFilter} /> }
        
       </>
    )
}