import { HeaderControls } from "./HeaderControls"



export const Header = ({favoritesList,setIsFavorityModalVisible,setSearch}) =>{
 return(
    <>
    <header>
        <img src="" alt="logo" />
        <HeaderControls setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} setSearch={setSearch} />
    </header>
    </>
 )
}