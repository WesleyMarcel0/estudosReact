import { HeaderControls } from "./HeaderControls"



export const Header = ({favoritesList,setIsFavorityModalVisible}) =>{
 return(
    <>
    <header>
        <img src="" alt="logo" />
        <HeaderControls setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} />
    </header>
    </>
 )
}