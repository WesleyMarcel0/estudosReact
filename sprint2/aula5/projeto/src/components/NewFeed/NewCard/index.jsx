
export const NewCard = ({currentNew}) =>{
    return(
        <li>
            <button>Favoritar</button>
            <span>{currentNew.category}</span>
            <h3>{currentNew.title}</h3>
            <button>Saiba mais</button>
        </li>
    )
}