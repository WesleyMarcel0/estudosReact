import { NewCard } from "./NewCard"


export const NewFeed = ({filter,newsList,addNewToFavoriteList,setCurrentSelectNew,searchAndFilteredResults,setSearch,search}) =>{

    const currentNewsList = search !== '' || filter !=='' ? searchAndFilteredResults : newsList

    return( // se tiver o que ta antes do (!==) faça essa ação () do contrario faça essa
        <div>
            <h2>{search !== '' ? `Resultados para:${search}` : 'Recentes'}</h2>
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