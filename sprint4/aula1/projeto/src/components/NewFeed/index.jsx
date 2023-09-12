
import { StyledTitleTwo } from "../../styles/typography"
import { useNewsContext } from "../providers/NewsContext";
import { NewCard } from "./NewCard"


export const NewFeed = ({addNewToFavoriteList,setCurrentSelectNew}) =>{

    const {newsList,searchAndFilteredResults,search,setSearch,filter,} = useNewsContext();

    const currentNewsList = search !== '' || filter !=='' ? searchAndFilteredResults : newsList

    return( // se tiver o que ta antes do (!==) faça essa ação () do contrario faça essa
        <div>
            <StyledTitleTwo fontSize='one' >{search !== '' ? `Resultados para:${search}` : 'Recentes'}</StyledTitleTwo>
            {search !== '' ? <button onClick={()=>setSearch('')}>Limpar Busca</button> : null }
            <ul>
                {
                    currentNewsList.map(currentNew =>(
                       <NewCard key={currentNew.id} currentNew={currentNew} addNewToFavoriteList={addNewToFavoriteList} setCurrentSelectNew={setCurrentSelectNew} />  
                    ))
                }
       
            </ul>
        </div>
    )
}