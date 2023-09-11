import { StyledContainer } from "../../styles/grid"
import { HeaderControls } from "./HeaderControls"
import { StyledHeader } from "./style"



export const Header = ({favoritesList,setIsFavorityModalVisible,setSearch}) =>{
 return(
    <>
    <StyledHeader >
        <StyledContainer>
            <div className="flexBox">
                <img src="" alt="logo" />
                <HeaderControls setIsFavorityModalVisible={setIsFavorityModalVisible} favoritesList={favoritesList} setSearch={setSearch} />
            </div>

        </StyledContainer>
        
    </StyledHeader>
    </>
 )
}