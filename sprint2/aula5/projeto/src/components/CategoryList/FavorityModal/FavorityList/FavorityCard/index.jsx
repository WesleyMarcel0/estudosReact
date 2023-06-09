

export const FavorityCard =  ({favoriteNew,removeNewfromFavoriteList}) =>{
    return(
        <li>
            <span>{favoriteNew.category}</span>
            <h3>{favoriteNew.title}</h3>
            <button onClick={()=>removeNewfromFavoriteList(favoriteNew.id)}>Desfavoritar</button>
        </li>
    )
}