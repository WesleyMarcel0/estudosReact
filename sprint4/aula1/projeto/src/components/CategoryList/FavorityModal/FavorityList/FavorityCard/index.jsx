import { StyledButton } from "../../../../../styles/buttons"
import { StyledLabel, StyledTitleThree } from "../../../../../styles/typography"


export const FavorityCard =  ({favoriteNew,removeNewfromFavoriteList}) =>{
    return(
        <li>
            <StyledLabel>{favoriteNew.category}</StyledLabel>
            <StyledTitleThree fontSize='three' >{favoriteNew.title}</StyledTitleThree>
            <StyledButton onClick={()=>removeNewfromFavoriteList(favoriteNew.id)}>Desfavoritar</StyledButton>
            
        </li>
    )
}