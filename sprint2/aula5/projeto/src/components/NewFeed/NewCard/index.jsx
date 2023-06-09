
export const NewCard = ({currentNew,addNewToFavoriteList,setCurrentSelectNew}) =>{
    return(
        <li>
            <button onClick={()=>addNewToFavoriteList(currentNew)} >Favoritar</button>
            <span>{currentNew.category}</span>
            <h3>{currentNew.title}</h3>
            <button onClick={()=>setCurrentSelectNew(currentNew)} >Saiba mais</button>
        </li>
    )
}