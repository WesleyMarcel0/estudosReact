import { StyledLabel, StyledTitleThree } from "../../../styles/typography"

export const NewCard = ({currentNew,addNewToFavoriteList,setCurrentSelectNew}) =>{
    return(
        <li>
            <button onClick={()=>addNewToFavoriteList(currentNew)} >Favoritar</button>
            <StyledLabel>{currentNew.category}</StyledLabel>
            <StyledTitleThree fontSize='two'>{currentNew.title}</StyledTitleThree>
            <button onClick={()=>setCurrentSelectNew(currentNew)} >Saiba mais</button>
        </li>
    )
}