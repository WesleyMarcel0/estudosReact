import { StyledContainer } from "../../styles/grid"
import { HeaderControls } from "./HeaderControls"
import { StyledHeader } from "./style"



export const Header = ({children}) =>{

    console.log('header carregou')

 return(
    <>
    <StyledHeader >
        <StyledContainer>
            <div className="flexBox">
                <img src="" alt="logo" />
                {children}
            </div>

        </StyledContainer>
        
    </StyledHeader>
    </>
 )
}