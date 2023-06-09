import { FavorityList } from "./FavorityList"


export const FavorityModal = ({favoritesList,removeNewfromFavoriteList}) =>{
    return(
        <div role="dialog" >
            <button>Fechar</button>
            <h2>Favoritos</h2>
            <FavorityList favoritesList={favoritesList} removeNewfromFavoriteList={removeNewfromFavoriteList} />
        </div>
    )
}