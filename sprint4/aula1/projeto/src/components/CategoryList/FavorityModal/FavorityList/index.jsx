import { FavorityCard } from "./FavorityCard"


export const FavorityList = ({favoritesList,removeNewfromFavoriteList}) =>{
    return(
        <ul>
            {favoritesList.map(favoriteNew =>(
               <FavorityCard key={favoriteNew.id} favoriteNew={favoriteNew} removeNewfromFavoriteList={removeNewfromFavoriteList} /> 
            ))
            }
            
        </ul>
    )
}