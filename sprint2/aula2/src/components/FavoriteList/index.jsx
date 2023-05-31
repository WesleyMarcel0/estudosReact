import { StyledButton } from "../../style/button"

export const FavoriteList = ({favoriteList,removeRecipeFromFavoriteList}) => {
    return(
        <ul> {/*pra cada favorito*/}
            {favoriteList.map(favorite => (
                <li key={favorite.id}>
                    <h3>{favorite.title}</h3>
                    <StyledButton 
                        buttonSize= "mid" 
                        buttonStyle="mid" 
                        onClick={() => removeRecipeFromFavoriteList(favorite.id)}> 
                            Desfavoritar </StyledButton>
                </li>
            ))}
        </ul>
    )
}