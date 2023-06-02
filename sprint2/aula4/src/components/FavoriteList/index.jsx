import { StyledButton } from "../../style/button"
import { StyledFavoriteModal } from "./style"

export const FavoriteList = ({favoriteList,removeRecipeFromFavoriteList,setOpen}) => {
    return(
        <StyledFavoriteModal role='dialog'>
            <button onClick={()=> setOpen(false)} >fechar</button>
            <ul> {/*pra cada favorito*/}
                {favoriteList.map(favorite => (
                    <li key={favorite.id}>
                        <h3>{favorite.title}</h3>

                        <StyledButton 
                            buttonSize= "mid" 
                            buttonStyle="primary" 
                            onClick={() => removeRecipeFromFavoriteList(favorite.id)}> 
                                Desfavoritar </StyledButton>
                    </li>
                ))}
            </ul>  

        </StyledFavoriteModal>

    )
}