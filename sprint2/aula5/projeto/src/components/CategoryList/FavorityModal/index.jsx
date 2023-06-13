import { StyledTitleTwo } from "../../../styles/typography"
import { FavorityList } from "./FavorityList"


export const FavorityModal = ({favoritesList,removeNewfromFavoriteList}) =>{
    return(
        <div role="dialog" >
            <button>Fechar</button>
            <StyledTitleTwo fontSize='two' >Favoritos</StyledTitleTwo>
            <FavorityList favoritesList={favoritesList} removeNewfromFavoriteList={removeNewfromFavoriteList} />
        </div>
    )
}